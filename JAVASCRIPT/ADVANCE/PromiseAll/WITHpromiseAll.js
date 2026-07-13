function download1() {
    return new Promise(resolve => {
        setTimeout(() => resolve("File 1"), 2000);
    });
}

function download2() {
    return new Promise(resolve => {
        setTimeout(() => resolve("File 2"), 1000);
    });
}

function download3() {
    return new Promise(resolve => {
        setTimeout(() => resolve("File 3"), 3000);
    });
}

async function fetchFiles() {

    const result = await Promise.all([
        download1(),
        download2(),
        download3()
    ]);

    console.log(result);

}

fetchFiles();