export default function addItemsModal() {
    
    // Function to show the modal
    function showModal() {
        const modal = document.getElementById('add-item-modal');
        modal.style.display = 'block'; // This will show the modal
    }

    // Function to hide the modal
    function hideModal(event) {
        event.preventDefault();
        const modal = document.getElementById('add-item-modal');
        modal.style.display = 'none'; // This will hide the modal
    }

    document.addEventListener('DOMContentLoaded', () => {
        const floatingButton = document.querySelector('.menu-setting__floating-button');
        const modal = document.getElementById('add-item-modal');
        const closeButton = modal.querySelector('.modal__close-button');


        // Event listener to show the modal when floating button is clicked
        floatingButton.addEventListener('click', showModal);

        // Event listener to hide the modal when close button is clicked
        closeButton.addEventListener('click', hideModal);
    })
}
