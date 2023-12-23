async function main(){
    const countContainer = document.querySelector('#count-container');
    const incrementButton = document.querySelector('#increment-button');
    const decrementButton = document.querySelector('#decrement-button');

    async function fetchData(){
        const response = await fetch('http://localhost:9001/counter');
        const responseObject = await response.json();

        console.log(responseObject.value);
        return responseObject.value
}
    

    countValue = await fetchData()
    console.log(countValue)
    

    function increment(){
        countValue++;
        countContainer.textContent = countValue;
    }

    function decrement(){
        countValue--;
        countContainer.textContent = countValue;
    }

    incrementButton.addEventListener('click', increment);
    decrementButton.addEventListener('click', decrement);
    countContainer.textContent = countValue;
}
main()