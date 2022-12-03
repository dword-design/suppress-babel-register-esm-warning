import { property } from '@dword-design/functions'
import packageName from 'depcheck-package-name'
import execa from 'execa'

export default {
  works: async () =>
    expect(
      execa.command(
        `node --require=${packageName`suppress-experimental-warnings`} --require=./src --experimental-loader=${packageName`babel-register-esm`} -e ''`,
        { all: true }
      )
        |> await
        |> property('all')
    ).toEqual(''),
}
