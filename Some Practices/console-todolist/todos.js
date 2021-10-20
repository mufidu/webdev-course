let input = prompt("Apa yang ingin anda lakukan?")
let tasks = []
while (input !== "q" && input !== "quit") {
    if (input === "new") {
        let taskBaru = prompt("Mau nambahin task apa?")
        tasks.push(taskBaru)
        console.log(`${tasks[tasks.length - 1]} berhasil ditambahkan`)
        input = prompt("Apa yang ingin anda lakukan?")
    }

    else if (input === "list") {
        console.log("################")
        for (let task of tasks) {
            console.log(`${tasks.indexOf(task)}| ${task}`)
        }
        console.log("################")
        input = prompt("Apa yang ingin anda lakukan?")
    }

    else if (input === "delete") {
        let index = prompt("Index berapa yang mau dihapus?")
        let deleted = tasks.splice(index, 1)
        console.log(`${deleted} telah dihapus`)
        input = prompt("Apa yang ingin anda lakukan?")
    }
}

console.log("You quit")
