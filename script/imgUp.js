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
const template = (filename) => (`https://raw.githubusercontent.com/laoergege/laoergege-blog/master/images/${filename}`)

async function main () {
    let status = await git.statusMatrix({ dir, fs, pattern: 'images/*.{png, jpg, jpeg, gif}' })
    
    let files = status
        .filter(row => row[HEAD] === row[WORKDIR])
        .map(row => row[FILE])

    await Promise.all(
        files.map(filepath => { return git.add({ ...repo, filepath: filepath }) })
    )
    
    let sha = await git.commit({ ...repo, message: '添加图片', author })
    console.log(sha)
    // await git.push({ ...repo, remote: 'origin', ref: 'master', token: 'a1afc6e2251141fd2068b7c67e0172c727a2db76' })
    
    // console.log(files.map((file) => (template(file))))
}

main()