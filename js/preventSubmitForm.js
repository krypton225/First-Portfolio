export default function preventSubmitForm() {
    document.getElementById("my-form").addEventListener("submit", (e) => {
        e.preventDefault();
    })
}