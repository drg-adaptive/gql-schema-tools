import { Command, flags } from "@oclif/command";
import { mergeTypeDefs } from "@graphql-tools/merge";
import { loadFilesSync } from "@graphql-tools/load-files";
import * as path from "path";
import * as fs from "fs";

export default class Merge extends Command {
  static description = `Merge multiple graphql schema files into a single output`;

  static flags = {
    help: flags.help({ char: `h` }),
    sort: flags.boolean({ default: true }),
    input: flags.string({
      char: `i`,
      description: `glob pattern of schema files`,
      default: `**/*.graphql`,
    }),
  };

  static args = [
    { name: `file`, description: `Filename to save result`, required: true },
  ];

  async run() {
    const { args, flags } = this.parse(Merge);

    try {
      const schemaFiles = loadFilesSync([
        path.resolve(process.cwd(), flags.input),
      ]);

      this.log(`Loaded ${schemaFiles.length} types`);
      
      const result = mergeTypeDefs(schemaFiles, { all: true, sort: flags.sort }, "utf-8")

      const outputFilename = path.resolve(process.cwd(), args.file);
      this.log(`Writing to ${outputFilename}`);

      await fs.promises.writeFile(outputFilename, result, `utf-8`);
    } catch (error) {
      this.error(error);
    }
  }
}
