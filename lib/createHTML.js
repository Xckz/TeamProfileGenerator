const fs = require("fs");
const path = require("path");

function createHTML(employeeArray) {
    fs.appendFileSync(path.resolve("./dist/index.html"), createHeader());

    employeeArray.forEach((element) => {
        let name = element.getName;
        let role = element.getRole;
        let ID = element.getId;
        let email = element.getEmail;
        let icon;
        let addInfo;

        if (role === "Manager") {
            icon = "<i class='fas fa-mug-hot'></i>";
            addInfo = `Office Number: ${element.getOfficeNumber}`;
            fs.appendFileSync(
                path.resolve("./dist/index.html"),
                createEmployeeCard(name, role, icon, ID, email, addInfo)
            );
        } else if (role === "Engineer") {
            icon = "<i class='fas fa-glasses'></i>";
            addInfo = `Github: <a href = "https://github.com/${element.getGithub}">${element.getGithub}</a>`;
            fs.appendFileSync(
                path.resolve("./dist/index.html"),
                createEmployeeCard(name, role, icon, ID, email, addInfo)
            );
        } else role === "Intern";
        {
            icon = "<i class='fas fa-graduation-cap'></i>";
            addInfo = `School: ${element.getSchool}`;
            fs.appendFileSync(
                path.resolve("./dist/index.html"),
                createEmployeeCard(name, role, icon, ID, email, addInfo)
            );
        }
    });

    fs.appendFileSync(path.resolve("./dist/index.html"), createFooter());
}

function createHeader() {
    let header = `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Team Profile Generator</title>
            <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
            integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ=="
            crossorigin="anonymous"
            referrerpolicy="no-referrer"
        />
            <link rel="stylesheet" href="styles.css">
            </head>
        <body>
            <header class = "main-header">
                <h1>My Team</h1>
            </header>
        
            <main>
                <section class = "card-container">
                `;

    return header;
}

function createEmployeeCard(name, role, icon, ID, email, addInfo) {
    let card;
    card = `
    
    <div class = "employee-card">
        <div class = "card-top">
            <h1>
                ${name}
            </h1>
            <h2>
                ${role} ${icon}
            </h2>
        </div>
        <div class = "card-bottom">
            <div>
                ID: ${ID}
            </div>
            <div>
                email: 
                <a href = "mailto: ${email}">
                    ${email}
                </a>
            </div>
            <div>
                ${addInfo}
            </div>
        </div>
    </div>
    
    `;
    return card;
}

function createFooter() {
    let footer = `   </section>
            </main>
        </body>
    </html>`;
    return footer;
}

module.exports = buildHTML;
