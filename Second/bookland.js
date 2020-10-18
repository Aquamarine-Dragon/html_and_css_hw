var authorArr = ["Thomas Mann", 'James Joyce', 'E.M.Forster', 'Isabel Allende'];
var titleArr = ["Death in Venice", 'A portrait of the artist as a young man', 'A room with a view',
    'The house of spirits', 'Of love and shadows'];
var infoArr = ["One of the most famous literary works of the twentieth century, this novella embodies themes that preoccupied Thomas Mann in much of his work: the duality of art and life, the presence of death and disintegration in the midst of existence, the connection between love and suffering and the conflict between the artist and his inner self.",
    "This book is a fictional re-creation of the Irish writer's own life and early environment. The experiences of the novel's young hero, unfold in astonishingly vivid scenes that seem freshly recalled from life and provide a powerful portrait of the coming of age of a young man of unusual intelligence, sensitivity and character.",
    "This work displays an unusually perceptive view of British society in the early 20th century.It is a social comedy set in Florence, Italy, and Surrey, England. Its heroine, Lucy Honeychurch, struggling against straitlaced Victorian attitudes of arrogance, narroe mindedness and sobbery, falls in love - while on holiday in Italy - with the socially unsuitable George Emerson.",
    "Allende describes the life of three generations of a prominent family in Chile and skillfully combines with this all the main historical events of the time, up until Pinochet's dictatorship.", "Allende describes the life of three generations of a prominent family in Chile and skillfully combines with this all the main historical events of the time, up until Pinochet's dictatorship.",
    "The whole world of Irene Beltran, a young reporter in Chile at the time of the dictatorship, is destroyed when she discovers a series of killings carried out by government soldiers. With the help of a photographer, Francisco Leal, and risking her life, she tries to come up with evidence against the dictatorship."];


var authorMap = new Map();
authorMap.set(authorArr[0], infoArr[0]);
authorMap.set(authorArr[1], infoArr[1]);
authorMap.set(authorArr[2], infoArr[2]);
authorMap.set(authorArr[3], infoArr[3]);
authorMap.set(authorArr[3], infoArr[4]);

var titleMap = new Map();
titleMap.set(titleArr[0], infoArr[0]);
titleMap.set(titleArr[1], infoArr[1]);
titleMap.set(titleArr[2], infoArr[2]);
titleMap.set(titleArr[3], infoArr[3]);
titleMap.set(titleArr[3], infoArr[4]);

function findBook() {
    bookTitle = document.getElementById("title").value;
    console.log(bookTitle);
    authorName = document.getElementById("author").value;
    console.log(authorName);
    info = document.getElementById("infoInput").value;
    if ((bookTitle !== "")&&(authorName !== "")) {
        if ((titleMap.has(bookTitle)) && (authorMap.has(authorName))) {
            if (authorMap.get(authorName) === titleMap.get(bookTitle)) {
                info = authorMap.get(authorName);
            }
        } else{
            info= "Book Not Found";
        }
    }else if (authorName === "") {
        if (titleMap.has(bookTitle)) {
            info= titleMap.get(bookTitle);
        }else{
            info = "Book Not Found";
        }
    }else{
        if (authorMap.has(authorName)) {
            info = authorMap.get(authorName);
        }else{
            info = "Book Not Found";
        }
    }
    console.log(info);
    document.getElementById("infoInput").value = info;

}
document.getElementById("findButton").addEventListener("click", findBook, false);

function clearThings() {
    var words = document.getElementsByTagName("input");
    var areaWords = document.getElementsByTagName("textarea");
    for(var i=0;i<words.length;i++)
    {
        if(words[i].type==="text")
        {
            words[i].value ="";
        }
    }
    for(var i=0;i<areaWords.length;i++)
    {
        if(areaWords[i].type==="textarea")
        {
            areaWords[i].value ="";
        }
    }
}

document.getElementById("clearButton").addEventListener("click", clearThings, false);







