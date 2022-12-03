import { property } from '@dword-design/functions'
import packageName from 'depcheck-package-name'
import execa from 'execa'

export default {
  works: async () =>
    expect(
      execa.command(`node -e ''`, {
        all: true,
        env: {
          NODE_OPTIONS: `--require ${packageName`suppress-experimental-warnings`} --experimental-loader=${packageName`babel-register-esm`}`,
        },
      })
        |> await
        |> property('all')
    ).toEqual(''),
}
