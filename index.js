const {exec} = require("child_process");
console.log('You are the best!');
console.log('Type: sudo killall curl to stop the song.');
exec("curl -s -L https://raw.githubusercontent.com/keroserene/rickrollrc/master/roll.sh | bash", (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
});
