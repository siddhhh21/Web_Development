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

    const f1 = await download1();
    console.log(f1);

    const f2 = await download2();
    console.log(f2);

    const f3 = await download3();
    console.log(f3);

}

fetchFiles();