
async function copyPortfolioLink() {
    alert("The button is working!");
    const portfolioUrl = document.getElementById("portfolio-url");
    const copyMessage = document.getElementById("copy-message");

    try {
        await navigator.clipboard.writeText(portfolioUrl.value);
        copyMessage.textContent = "Link copied successfully!";
    } catch (error) {
        copyMessage.textContent = "Automatic copy failed. Long-press the link to copy it.";
        portfolioUrl.focus();
        portfolioUrl.select();
    }
}

