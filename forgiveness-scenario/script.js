const storyNodes = {
    start: {
        text: `
            <p><strong>Monday Morning...</strong></p>
            <p>You wake up early for another long day of college classes. You're a junior now, but you're still studying for the SATs because you want to get into a very good college.</p>
            <p>Your stomach growls — you need breakfast before your study session.</p>
        `,
        choices: [
            { text: "Eat cereal", next: "eatCereal" },
            { text: "Make a sandwich", next: "makeSandwich" }
        ]
    },

    eatCereal: {
        text: `
            <p>You pour a bowl of cereal and check your notes while you eat. You're focused and ready to start the day.</p>
            <p>Later, at campus, you sit in the student lounge with your flashcards. A few classmates nearby start laughing.</p>
            <p>"Still studying for the SATs? Dude, that’s for nerds, do you not know what fun is!" one of them jokes.</p>
        `,
        choices: [
            { text: "Ignore them and keep studying", next: "keepStudying" },
            { text: "Say something back", next: "respondToTeasing" },
            { text: "Leave the lounge quietly", next: "leaveLounge" }
        ]
    },

    makeSandwich: {
        text: `
            <p>You make a quick sandwich and eat while scrolling through your phone. A friend texts you: "We’re going to hang out later — wanna come?"</p>
            <p>You think about it, but you also planned to study today.</p>
        `,
        choices: [
            { text: "Go hang out with them", next: "goHangOut" },
            { text: "Stay home and study", next: "stayHomeStudy" },
            { text: "Tell them you’ll join after studying", next: "studyThenJoin" }
        ]
    },

    leaveLounge: {
        text: `
            <p>You quietly gather your things and move to a corner table. The laughter fades behind you.</p>
            <p>You try to focus, but part of you feels frustrated — why do people care so much about what others do?</p>
            <p>Still, you study hard. You know what you’re working for.</p>
            <p>Later that day, you see one of those classmates struggling with an assignment.</p>
        `,
        choices: [
            { text: "Offer to help them", next: "offerHelp" },
            { text: "Ignore them and walk past", next: "ignoreHelp" }
        ]
    },

    offerHelp: {
        text: `
            <p>You walk up and ask, "Need some help?"</p>
            <p>They look surprised but nod. After a while, the tension eases, and they thank you. Maybe they weren’t so bad after all.</p>
            <p>The next day, though, another one of their friends decides to mess with you, spilling water on your notes “by accident.”</p>
        `,
        choices: [
            { text: "Get angry and throw water back", next: "throwWaterBack" },
            { text: "Try to stay calm", next: "stayCalm" }
        ]
    },

    ignoreHelp: {
        text: `
            <p>You walk right past them without saying a word. Part of you feels justified — they mocked you first.</p>
            <p>But later that day, they bump into you in the hallway, spilling water on your notes and laughing with their friends.</p>
        `,
        choices: [
            { text: "Get angry and throw water back", next: "throwWaterBack" },
            { text: "Walk away quietly", next: "stayCalm" }
        ]
    },

    keepStudying: {
        text: `
            <p>You stay focused, pretending not to hear the jokes. The laughter still stings, though.</p>
            <p>The next day, while you’re studying outside, one of the same classmates “accidentally” spills water on your notebook.</p>
            <p>"Oops, my bad!" they say with a smirk. You’re drenched, and your notes are ruined.</p>
        `,
        choices: [
            { text: "Get angry and throw water back", next: "throwWaterBack" },
            { text: "Try to stay calm", next: "stayCalm" }
        ]
    },

    respondToTeasing: {
        text: `
            <p>"Yeah, well, maybe I care about my future," you say firmly. The group goes quiet, surprised by your confidence.</p>
            <p>But later, one of them walks by your table and knocks over your water bottle on purpose. Your notes get soaked.</p>
            <p>"Oops," they say, clearly not sorry.</p>
        `,
        choices: [
            { text: "Get angry and throw water back", next: "throwWaterBack" },
            { text: "Take a deep breath and walk away", next: "stayCalm" }
        ]
    },

    goHangOut: {
        text: `
            <p>You decide to hang out instead of studying. It’s fun at first, but later your friends tease you for caring so much about tests and grades.</p>
            <p>"You’re too serious!" they laugh. You laugh too, but it still stings.</p>
            <p>The next day, one of them bumps into you and spills water all over your shirt. Everyone laughs.</p>
        `,
        choices: [
            { text: "Laugh it off", next: "stayCalm" },
            { text: "Get angry and throw water back", next: "throwWaterBack" }
        ]
    },

    stayHomeStudy: {
        text: `
            <p>You stay home and focus. You feel productive and proud.</p>
            <p>But when you see your friends the next day, they tease you: "You’re so boring — you never do anything fun!"</p>
            <p>Later, one of them spills water on you “by accident.” You can tell it wasn’t.</p>
        `,
        choices: [
            { text: "Get angry and throw water back", next: "throwWaterBack" },
            { text: "Try to stay calm", next: "stayCalm" }
        ]
    },

    studyThenJoin: {
        text: `
            <p>You decide to study first, then hang out. When you finally meet them later, you feel relaxed — like you earned the break.</p>
            <p>But as soon as you mention your SAT goals, one friend rolls their eyes. "You still care about that?"</p>
            <p>You smile politely, but it’s clear not everyone understands your drive.</p>
        `,
        choices: [
            { text: "Defend your goals", next: "respondToTeasing" },
            { text: "Change the subject", next: "stayCalm" }
        ]
    },

    throwWaterBack: {
        text: `
            <p>You jump up, furious. Before you even think, you grab your bottle and splash water right back at them.</p>
            <p>The room goes silent. Everyone stares. Your classmate just stands there, dripping wet. For a moment, you almost feel bad — almost.</p>
            <p>You grab your stuff and storm out, your heart racing.</p>
            <p>After that, things between you two get tense. You avoid each other in the halls, and word about the “water fight” spreads fast.</p>
            <p>Weeks pass. One afternoon, they approach you by your locker, looking awkward.</p>
            <p><em>"Hey... I shouldn’t have done that. I was being a jerk. I’m sorry."</em></p>
        `,
        choices: [
            { text: "Forgive them", next: "forgiveInHighSchool" },
            { text: "Don’t forgive them", next: "noForgiveInHighSchool" },
            { text: "Ignore them completely", next: "ignoreApology" }
        ]
    },

    ignoreApology: {
        text: `
            <p>You grab your books and walk away without a word. They watch you go, guilt written all over their face.</p>
            <p>Later that week, you hear they got detention for another prank. Maybe they didn’t learn anything after all.</p>
            <p>Still, you can’t help wondering if you should’ve said something.</p>
            <p>Years later, you get a message online. It’s from <strong>them.</strong></p>
            <p><em>"I don’t expect you to reply. I just wanted to say sorry — for everything."</em></p>
        `,
        choices: [
            { text: "Read their message and think about it", next: "lateApologyEndingUnforgiven" },
            { text: "Ignore the message again", next: "noForgiveEnding" }
        ]
    },

    forgiveInHighSchool: {
        text: `
            <p>You take a deep breath and nod. "Okay... I forgive you."</p>
            <p>They look confused. "Wait, what? Just like that?"</p>
            <p>"Yeah. I'm choosing to let it go," you say simply.</p>
            <p>They stand there for a moment, clearly not understanding. "Uh... okay. Cool, I guess." They walk away, looking more puzzled than relieved.</p>
            <p><strong>A few days later...</strong></p>
            <p>You're at your locker when they approach you again, this time looking more serious.</p>
            <p>"Hey... I've been thinking about what you said. About forgiving me. I don't think I really got it at first, but... I realize now how messed up what I did was. I'm truly sorry. You didn't deserve that."</p>
            <p>After that conversation, things actually get better. You don't become best friends, but there's mutual respect. Sometimes they even study with you.</p>
            <p>By graduation, you've both grown up a bit — and left the drama behind.</p>
            <p>Years later, long after graduation, you get a message online.</p>
            <p><em>"Hey… I just wanted to say thank you. You forgiving me back then helped me change. I hope you're doing well."</em></p>
        `,
        choices: [
            { text: "Read their message and smile", next: "lateApologyEndingForgiven" },
            { text: "Ignore it — you still have resentment in your heart", next: "resentmentEnding" }
        ]
    },

    noForgiveInHighSchool: {
        text: `
            <p>You cross your arms. "I’m not ready to forgive you," you say firmly.</p>
            <p>They nod slowly. "Yeah… I get it. I deserve that."</p>
            <p>After that, you rarely talk. The school year ends, and you move on, still angry when you think about it.</p>
            <p>Years later, long after graduation, you get a message online.</p>
            <p><em>"Hey… I know this is random, but I wanted to say I’m really sorry for what I did back then. I was immature and mean. You didn’t deserve that."</em></p>
        `,
        choices: [
            { text: "Read their message and think about it", next: "lateApologyEndingUnforgiven" },
            { text: "Ignore the message", next: "noForgiveEnding" }
        ]
    },

    stayCalm: {
        text: `
            <p>You take a deep breath and wipe off your notes. "That wasn’t cool," you say calmly.</p>
            <p>The classmate looks guilty and walks away without saying anything.</p>
            <p>The next day, they approach you again. "Hey, I’m really sorry about what happened. I went too far."</p>
        `,
        choices: [
            { text: "Accept the apology", next: "forgiveScene" },
            { text: "Tell them you’re not ready to forgive", next: "notReadyYet" }
        ]
    },

    forgiveScene: {
        text: `
            <p>You nod slowly. "Okay. I forgive you."</p>
            <p>They smile, relieved. "Thanks. You didn't deserve that. I've been stressed and took it out on you."</p>
            <p>Over the next few weeks, they actually start studying with you. You both grow past it.</p>
            <div class="ending positive">
                <h2>🌟 The End: Forgiveness and Growth</h2>
                <p>You chose to forgive, and it helped both of you learn and grow. You stayed true to yourself and showed that kindness can turn enemies into friends.</p>
                <p><strong>📖 Bible Connection:</strong> Like the Prodigal Son's father (Luke 15:11-32), you welcomed back someone who wronged you with open arms. The father didn't hold a grudge or make his son earn forgiveness — he forgave immediately and celebrated his return. Your quick forgiveness gave your classmate a chance to change, just as the father's love transformed his son.</p>
            </div>
        `,
        choices: []
    },

    notReadyYet: {
        text: `
            <p>"I’m not ready to forgive you," you say quietly. "What you did really hurt."</p>
            <p>They nod, looking sad. "I get it. I’ll give you space."</p>
            <p>Weeks later, you see them helping someone else in class. They’ve changed — calmer, kinder.</p>
            <p>They come up again and say, "I’m still sorry. Can we try again?"</p>
        `,
        choices: [
            { text: "Forgive them this time", next: "forgiveScene" },
            { text: "Say no and move on", next: "noForgiveEnding" }
        ]
    },

    lateApologyEndingForgiven: {
        text: `
            <p>You smile at the message. It feels good knowing that your choice to forgive made a real difference.</p>
            <p>You type a reply: "Thanks. I'm glad you reached out. Hope you're doing great too."</p>
            <p>It feels like the story finally came full circle — not about the water, but about growing up and letting go.</p>
            <div class="ending positive">
                <h2>🌟 The End: Growth and Gratitude</h2>
                <p>Your forgiveness helped someone change — and helped you move on without regret.</p>
                <p><strong>📖 Bible Connection:</strong> Like Joseph forgiving his brothers (Genesis 50:15-21), you chose forgiveness even after years had passed. Joseph's brothers sold him into slavery, yet when they met again, Joseph said, "You intended to harm me, but God intended it for good." Your forgiveness became a testimony of grace that helped someone grow into a better person.</p>
            </div>
        `,
        choices: []
    },

    lateApologyEndingUnforgiven: {
        text: `
            <p>You stare at the message for a while, surprised they even remembered. You don't feel angry anymore — just older, calmer.</p>
            <p>You type a short reply: "Thanks for saying that. I appreciate it. It means something you decided to reach out after all these years to apologize."</p>
            <div class="ending reflective">
                <h2>💧 The End: Time and Reflection</h2>
                <p>You never forgot what happened, but time softened the edges. Now you wonder if you should set time aside to hang out with them again and see how they've changed.</p>
                <p><strong>📖 Bible Connection:</strong> Like Jacob and Esau reuniting after years apart (Genesis 33:1-11), time helped heal your wounds. Jacob feared his brother's anger after deceiving him years earlier, but when they met, Esau ran to embrace him. Sometimes we need time and distance before we're ready to truly forgive and reconcile.</p>
            </div>
        `,
        choices: []
    },

    noForgiveEnding: {
        text: `
            <p>You close the message and move on. </p>
            <div class="ending neutral">
                <h2>💔 The End: Moving On Alone</h2>
                <p>You wonder if you made the right choice of never forgiving them.</p>
                <p><strong>📖 Bible Connection:</strong> Remember Jonah, who refused to forgive the people of Nineveh (Jonah 4:1-11). Even after God forgave them, Jonah remained angry and bitter. God asked him, "Is it right for you to be angry?" Sometimes our unforgiveness hurts us more than those we refuse to forgive. God calls us to forgive as He forgives us.</p>
            </div>
        `,
        choices: []
    },

    resentmentEnding: {
        text: `
            <p>You stare at the message for a moment, then delete it without responding.</p>
            <p>"I forgave them once," you think bitterly. "That was enough."</p>
            <p>But even as you try to move on with your day, something feels heavy in your chest. The resentment you're holding onto — it's like carrying a stone everywhere you go.</p>
            <p><strong>Weeks later...</strong></p>
            <p>You're at a family gathering when your younger cousin asks you about forgiveness. "Our Sunday school teacher says we should forgive seventy times seven. That seems like a lot."</p>
            <p>You pause, thinking about that old message you deleted. "Yeah," you say slowly. "It does seem like a lot."</p>
            <p>Your aunt overhears and adds, "You know, forgiveness isn't really about keeping count. It's about freeing yourself from the weight of anger."</p>
            <p>That night, you lie in bed thinking. You forgave them years ago with your words, but did you ever forgive them in your heart?</p>
            <p>Maybe true forgiveness means letting go completely — not just once, but every time the memory tries to pull you back into bitterness.</p>
            <div class="ending reflective">
                <h2>🪨 The End: The Weight We Carry</h2>
                <p>You learned that forgiveness isn't a one-time choice — it's a journey. The resentment you held onto became heavier than what they did to you. True freedom comes when we forgive not just with our words, but with our hearts, again and again.</p>
                <p><strong>📖 Bible Connection:</strong> When Peter asked Jesus, "How many times shall I forgive my brother? Seven times?" Jesus answered, "Seventy times seven" (Matthew 18:21-22). Jesus then told the parable of the Unforgiving Servant who, after being forgiven a huge debt, refused to forgive a small debt owed to him. True forgiveness isn't counting — it's a continual act of grace, releasing others as God releases us.</p>
            </div>
        `,
        choices: []
    }
};



// Current state
let currentNode = 'start';
let history = []; // Track the history of visited nodes

// Display the current story node
function displayNode(nodeId) {
    const node = storyNodes[nodeId];
    const storyText = document.getElementById('story-text');
    const choicesDiv = document.getElementById('choices');

    // Update story text with animation
    storyText.style.opacity = '0';
    setTimeout(() => {
        storyText.innerHTML = node.text;
        storyText.style.opacity = '1';
    }, 300);

    // Clear previous choices
    choicesDiv.innerHTML = '';

    // Add new choices if they exist
    if (node.choices && node.choices.length > 0) {
        node.choices.forEach((choice, index) => {
            const button = document.createElement('button');
            button.textContent = choice.text;
            button.className = `choice-btn ${choice.class}`;
            button.style.animationDelay = `${index * 0.1}s`;
            button.onclick = () => makeChoice(choice.next);
            choicesDiv.appendChild(button);
        });
    } else {
        // If no choices, show restart button
        document.getElementById('restart-btn').style.display = 'block';
    }

    // Update back button visibility
    const backBtn = document.getElementById('back-btn');
    if (history.length > 0 && node.choices && node.choices.length > 0) {
        backBtn.classList.remove('hidden');
    } else {
        backBtn.classList.add('hidden');
    }

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Handle choice selection
function makeChoice(nextNodeId) {
    // Add current node to history before moving forward
    history.push(currentNode);
    currentNode = nextNodeId;
    displayNode(currentNode);
}

// Go back to previous node
function goBack() {
    if (history.length > 0) {
        currentNode = history.pop();
        displayNode(currentNode);
    }
}

// Restart the story
function restartStory() {
    currentNode = 'start';
    history = []; // Clear history
    displayNode(currentNode);
    document.getElementById('restart-btn').style.display = 'none';
}

// Initialize the story
displayNode(currentNode);

// Add event listener for back button
document.getElementById('back-btn').addEventListener('click', goBack);
