const git = require('isomorphic-git');
const fs = require('fs');
const path = require('path');
const dir = path.resolve();

const FILE = 0, HEAD = 1, WORKDIR = 2, STAGE = 3;
let repo = { dir, fs }
const author = {
    name: 'laoergege',
    email: '13211239457@163.com'
}
const template = (filepath) => (`https://raw.githubusercontent.com/laoergege/laoergege-blog/master/${filepath}`)

async function commitImg () {
    let message = [];
    let status = await git.statusMatrix({ dir, fs, pattern: 'images/*.{png, jpg, jpeg, gif}' })

    let files = status.filter(row => row[HEAD] !== row[WORKDIR])

    await Promise.all(
        files.map(([filepath, , worktreeStatus], i) => { 
            if (worktreeStatus) {
                message.push(`添加 ${filepath} 图片`)
                return git.add({ ...repo, filepath: filepath })
            } else {
                message.push(`删除 ${filepath} 图片`)
                files.splice(i, 1)
                return git.remove({ ...repo, filepath: filepath })
            }
        })
    )

    if (files.length !== 0) {
        await git.commit({ ...repo, message: message.join(','), author })

        try {
            await git.push({ ...repo, remote: 'origin', ref: 'master', username: 'laoergege', password: 'a123b456c789.' })

            return files.map(([filepath]) => (filepath)).map((file) => (template(file)))
        } catch (error) {
            console.log(error)
            throw(error)
        }
    }
}

commitImg().then((files) => {
    console.log(files)
})