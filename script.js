        examples: `
            <h3>Worked Examples</h3>

            <p><strong>Example 1:</strong> Find the number of ways of
            selecting 3 students from 7 students.</p>

            <p>
                We use the combination formula:
            </p>

            <p>
                <strong>nCr = n! / [r!(n-r)!]</strong>
            </p>

            <p>
                7C3 = 7! / [3!(7-3)!]
            </p>

            <p>
                = 7! / (3!4!)
            </p>

            <p>
                = (7 × 6 × 5) / (3 × 2 × 1)
            </p>

            <p>
                = <strong>35</strong>
            </p>

            <p>
                Therefore, there are <strong>35 ways</strong> of selecting
                3 students.
            </p>


            <p><strong>Example 2:</strong> Find 8C2.</p>

            <p>
                8C2 = 8! / (2!6!)
            </p>

            <p>
                = (8 × 7) / (2 × 1)
            </p>

            <p>
                = <strong>28</strong>
            </p>

            <p>
                Therefore, <strong>8C2 = 28</strong>.
            </p>


            <p><strong>Example 3:</strong> A committee of 4 people is to
            be selected from 10 people. How many different committees
            are possible?</p>

            <p>
                10C4 = 10! / (4!6!)
            </p>

            <p>
                = (10 × 9 × 8 × 7) / (4 × 3 × 2 × 1)
            </p>

            <p>
                = <strong>210</strong>
            </p>

            <p>
                Therefore, <strong>210 different committees</strong>
                are possible.
            </p>
        `,

        practice: `
            <h3>Practice Questions</h3>

            <ol>
                <li>Find 6C2.</li>

                <li>Find 9C3.</li>

                <li>How many ways can 2 students be selected from
                8 students?</li>

                <li>How many ways can a committee of 3 people be
                selected from 7 people?</li>

                <li>Find 10C2.</li>
            </ol>
        `,

        answers: `
            <h3>Answers</h3>

            <ol>
                <li>
                    6C2 = <strong>15</strong>
                </li>

                <li>
                    9C3 = <strong>84</strong>
                </li>

                <li>
                    8C2 = <strong>28</strong>
                </li>

                <li>
                    7C3 = <strong>35</strong>
                </li>

                <li>
                    10C2 = <strong>45</strong>
                </li>
            </ol>
        `
    }

};


// ============================================================
// DISPLAY TOPIC
// ============================================================

function showTopic() {

    const select = document.getElementById("topicSelect");
    const lesson = document.getElementById("lesson");

    if (!select || !lesson) {
        return;
    }

    const topicNumber = select.value;
    const topic = topics[topicNumber];

    if (!topic) {
        lesson.innerHTML = `
            <div class="welcome-box">
                <h2>Welcome to SSS 2 Mathematics</h2>
                <p>Select a topic above to begin learning.</p>
            </div>
        `;
        return;
    }

    lesson.innerHTML = `
        <article class="topic-card">

            <h1>Topic ${topicNumber}: ${topic.title}</h1>

            <div class="lesson-section">
                <h2>Lesson</h2>
                ${topic.lesson}
            </div>

            <div class="examples-section">
                ${topic.examples}
            </div>

            <div class="practice-section">
                ${topic.practice}
            </div>

            <div class="answers-section">
                ${topic.answers}
            </div>

        </article>
    `;
}


// ============================================================
// LOAD TOPICS INTO DROPDOWN
// ============================================================

document.addEventListener("DOMContentLoaded", function () {

    const select = document.getElementById("topicSelect");

    if (!select) {
        return;
    }

    select.innerHTML = `
        <option value="">-- Select a Mathematics Topic --</option>
    `;

    Object.keys(topics).forEach(function (number) {

        const option = document.createElement("option");

        option.value = number;
        option.textContent =
            "Topic " + number + ": " + topics[number].title;

        select.appendChild(option);
    });

});
