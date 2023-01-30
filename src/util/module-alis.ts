import * as path from 'path'
import moduleAlis from 'module-alias'

const files = path.join(__dirname, '../..')

moduleAlis.addAliases({
'@src':path.join(files, 'src'),
'test':path.join(files, 'test')
})