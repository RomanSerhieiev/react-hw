import React from 'react';
import Simpson from "../Simpson/Simpson";

const Simpsons = () => {
    const simpsons = [
        {
            id: 1,
            name: "Homer Jay Simpson",
            gender: "Male",
            status: "Alive",
            countryOfBirth: "United States",
            age: 39,
            hairColor: "Bald",
            occupation: "Safety inspector",
            info: "Homer Jay Simpson is a man from Springfield. He is the husband of Marge Simpson and father of Bart, Lisa and Maggie Simpson. Homer is overweight (said to be 313.05641230253 pounds in one episode or 240 pounds elsewhere), lazy, and often ignorant to the world around him. Although he has many flaws, he has shown to have great caring, love and even bravery to those he cares about and sometimes, even others he doesn't.",
            image: "https://static.wikia.nocookie.net/simpsons/images/b/bd/Homer_Simpson.png"
        },
        {
            id: 2,
            name: "Marge Simpson",
            gender: "Female",
            status: "Alive",
            countryOfBirth: "United States",
            age: 39,
            hairColor: "Blue",
            occupation: "Unemployed",
            info: "Marjorie Jacqueline \"Marge\" Simpson (née Bouvier), is the homemaker and matriarch of the Simpson family. She is also one of the five main characters in The Simpsons TV series. She and her husband Homer have three children: Bart, Lisa, and Maggie. Marge is the moralistic force in her family and often provides a grounding voice in the midst of her family's antics by trying to maintain order in the Simpson household. Aside from her duties at home, Marge has flirted briefly with a number of careers ranging from a police officer to an anti-violence activist.",
            image: "https://static.wikia.nocookie.net/simpsons/images/4/4d/MargeSimpson.png"
        },
        {
            id: 3,
            name: "Bartholomew Jo Jo \"Bart\" Simpson",
            gender: "Male",
            status: "Alive",
            countryOfBirth: "United States",
            age: 10,
            hairColor: "Blonde",
            occupation: "Student at Springfield Elementary School",
            info: "Bartholomew JoJo \"Bart\" Simpson is the mischievous, rebellious, misunderstood, disruptive and \"potentially dangerous\" oldest child of the Simpson family in The Simpsons. He is the only son of Homer and Marge Simpson, and the older brother of Lisa and Maggie. He also has been nicknamed \"Cosmo\", after discovering a comet in \"Bart's Comet\". Bart has also been on the cover on numerous comics, such as \"Critical Hit\", \"Simpsons Treasure Trove #11\", and \"Winter Wingding\". Bart also has a 100-issue comic series entitled the Simpson Comics Presents Bart Simpson. Bart is loosely based on Matt Groening and his older brother, Mark Groening.",
            image: "https://static.wikia.nocookie.net/simpsons/images/6/65/Bart_Simpson.png"
        },
        {
            id: 4,
            name: "Lisa Marie Simpson",
            gender: "Female",
            status: "Alive",
            countryOfBirth: "United States",
            age: 8,
            hairColor: "Blonde",
            occupation: "Student at Springfield Elementary School",
            info: "Lisa Marie Simpson is the elder daughter and middle child of the Simpson family and one of the two tritagonists (along with Marge,) of The Simpsons. She was named after a train called Lil' Lisa on her parents' 1st anniversary; in \"Homer and Lisa Exchange Cross Words\", she called herself Lisa Bouvier after estranging herself from her father after he bet against her in a crossword tournament.",
            image: "https://static.wikia.nocookie.net/simpsons/images/d/d5/Lisa_Simpson_official.png"
        },
        {
            id: 5,
            name: "Maggie Simpson",
            gender: "Female",
            status: "Alive",
            countryOfBirth: "United States",
            age: 1,
            hairColor: "Blonde",
            occupation: "Baby",
            info: "Margaret Evelyn \"Maggie\" Simpson is the 1-year-old, and youngest, child of Marge and Homer, and the baby sister to Bart and Lisa and the tetartagonist of The Simpsons. She is often seen sucking on her pacifier, and, when she walks, she trips over her clothing and falls on her face. Because she rarely ever talks, Maggie is the least seen and heard in the Simpson family.",
            image: "https://static.wikia.nocookie.net/simpsons/images/9/9d/Maggie_Simpson.png"
        },
        {
            id: 6,
            name: "Abraham Jebediah \"Abe\" Simpson II",
            gender: "Male",
            status: "Alive",
            countryOfBirth: "The Old Country",
            age: 87,
            hairColor: "Blonde",
            occupation: "Retired",
            info: "Abraham Jebediah \"Abe\" Simpson II, commonly known as Grampa Simpson or simply Grampa, is a major recurring character in The Simpsons and a supporting character in The Simpsons Movie. He is the oldest patriarch of the Simpson family, husband of Rita LaFleur, ex-husband of the late Mona Simpson, father of Homer Simpson, Herbert Powell and Abbey, father-in-law of Marge Simpson and paternal grandfather of Bart, Lisa and Maggie Simpson. He is also the ex-boyfriend of Jacqueline Bouvier.",
            image: "https://static.wikia.nocookie.net/simpsons/images/a/a9/Abraham_Simpson.png"
        },
        {
            id: 7,
            name: "Mona Simpson",
            gender: "Female",
            status: "Deceased",
            countryOfBirth: "The Old Country",
            age: 79,
            hairColor: "Gray",
            occupation: "Fugitive",
            info: "Mona Simpson, also known as Sunny was the mother of Homer Simpson, mother-in-law of Marge Simpson, paternal grandmother of Bart, Lisa and Maggie Simpson and ex-wife of Abraham Simpson II.",
            image: "https://static.wikia.nocookie.net/simpsons/images/5/52/IMG_1693.PNG"
        },
        {
            id: 8,
            name: "Patricia Maleficent \"Patty\" Bouvier",
            gender: "Female",
            status: "Alive",
            countryOfBirth: "United States",
            age: 37,
            hairColor: "Gray",
            occupation: "Springfield DMV Employee",
            info: "Patricia Maleficent[2] \"Patty\" Bouvier is one of Marge's cynical chain-smoking twin sisters, who works at the [[Department of Motor Vehicles] (DMV) and has a strong dislike for her brother-in-law, Homer Simpson. Patty is a lesbian since she has confessed this to Marge (asking \"did you actually think I was straight?\"), appeared on a float at a pride parade, and had tomboy tendencies as a child. She is also the maternal aunt to Bart, Lisa, Maggie, and Ling. She is named after Matt Groening's sister Patty Groening.",
            image: "https://static.wikia.nocookie.net/simpsons/images/5/54/Temp.png"
        },
        {
            id: 9,
            name: "Selma Bouvier",
            gender: "Female",
            status: "Alive",
            countryOfBirth: "United States",
            age: 41,
            hairColor: "Gray",
            occupation: "Employee of Department of Motor Vehicles",
            info: "Selma Bouvier-Terwilliger-Hutz-McClure-Discothèque-Simpson-D'Amico (née Bouvier) is one of Marge's older chain-smoking twin sisters. She works at the DMV and possesses a strong dislike for her brother-in-law, Homer, although on extremely rare occasions she shows kindness towards him and seems to tolerate him. She seems to despise Homer slightly less than her twin sister, Patty Bouvier.",
            image: "https://static.wikia.nocookie.net/simpsons/images/b/ba/Selma_Bouvier.png"
        }
    ]
    return (
        <div>
            {simpsons.map(simpson => <Simpson key = {simpson.id} simpson = {simpson}/>)}
        </div>
    );
};

export default Simpsons;