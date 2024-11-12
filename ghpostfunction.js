const mobileNumber = document.getElementById('numberId');
const transactionNumber = document.getElementById('transactionId');
const modalDisplay = document.getElementById('modalId');
const bodyForm = document.getElementById('bodyId');
const textElement = document.getElementById('textId');

function confirm(event) {
    event.preventDefault();

    if (mobileNumber.value !== '' && transactionNumber.value !== '') {
        modalDisplay.style.display = 'block';
        mobileNumber.value = "";
        transactionNumber.value = "";
        bodyForm.style.display = 'none';
    } 
}

function done(){
    bodyForm.style.display = 'flex';
    modalDisplay.style.display = 'none';
}

function copyText() {
    const textToCopy = textElement.textContent;

    navigator.clipboard.writeText(textToCopy)
        .then(() => {
            alert("Text copied to clipboard!");
        })
        .catch(err => {
            console.error("Failed to copy text: ", err);
        });
}
