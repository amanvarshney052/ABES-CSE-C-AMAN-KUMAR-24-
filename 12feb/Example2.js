async function getData(){
    console.log("Fetching data...");
    let result = await someAsyncOperation();
    
    console.log(`Result: ${result}`);
    return result;

}
function someAsyncOperation(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Operation completed successfully!");
        }, 2000);
    }); 
}

getData();