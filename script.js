// ============================================================
// SSS 2 MATHEMATICS APP
// 45 TOPICS
// ============================================================

const topics = {

    // ========================================================
    // TOPIC 1
    // ========================================================

    1: {
        title: "Surds",

        lesson: `
            <div class="lesson-section">

                <h3>Lesson</h3>

                <p>
                    A surd is an irrational number expressed in the form of
                    a root which cannot be simplified to a rational number.
                    Examples include √2, √3, √5 and 2√7.
                </p>

                <p>
                    Surds are useful because they allow exact values to be
                    maintained instead of using rounded decimal values.
                </p>

                <h3>Simplifying Surds</h3>

                <p>
                    To simplify a surd, express the number inside the square
                    root as a product containing a perfect square.
                </p>

                <div class="formula">
                    √(ab) = √a × √b
                </div>

                <p>
                    For example, √72 can be written as √(36 × 2).
                    Therefore √72 = 6√2.
                </p>

                <h3>Adding and Subtracting Surds</h3>

                <p>
                    Only like surds can be added or subtracted.
                </p>

                <div class="example">
                    <strong>Worked Example 1</strong>

                    Simplify √50 + √8.

                    <br><br>

                    √50 = √(25 × 2) = 5√2

                    <br>

                    √8 = √(4 × 2) = 2√2

                    <br><br>

                    Therefore:

                    <br>

                    5√2 + 2√2 = <strong>7√2</strong>
                </div>

                <h3>Multiplication of Surds</h3>

                <div class="example">
                    <strong>Worked Example 2</strong>

                    Simplify √6 × √24.

                    <br><br>

                    √6 × √24 = √144

                    <br>

                    = <strong>12</strong>
                </div>

                <h3>Rationalising the Denominator</h3>

                <p>
                    Rationalising a denominator means removing a surd from
                    the denominator of a fraction.
                </p>

                <div class="example">
                    <strong>Worked Example 3</strong>

                    Rationalise 5/√3.

                    <br><br>

                    Multiply numerator and denominator by √3:

                    <br>

                    (5√3)/(√3 × √3)

                    <br>

                    = <strong>5√3/3</strong>
                </div>

                <h3>Practice Questions</h3>

                <div class="practice">
                    <ol>
                        <li>Simplify √48.</li>
                        <li>Simplify √75 + √12.</li>
                        <li>Evaluate √5 × √20.</li>
                        <li>Simplify 3√2 + 5√2 − √2.</li>
                        <li>Rationalise 4/√5.</li>
                    </ol>
                </div>

                <h3>Answers</h3>

                <div class="answers">
                    <ol>
                        <li>4√3</li>
                        <li>7√3</li>
                        <li>10</li>
                        <li>7√2</li>
                        <li>4√5/5</li>
                    </ol>
                </div>

            </div>
        `
    },


    // ========================================================
    // TOPIC 2
    // ========================================================

    2: {
        title: "Logarithms",

        lesson: `
            <div class="lesson-section">

                <h3>Lesson</h3>

                <p>
                    A logarithm is another way of expressing an index.
                    If a<sup>x</sup> = N, then:
                </p>

                <div class="formula">
                    log<sub>a</sub>N = x
                </div>

                <p>
                    The number a is called the base, N is the number being
                    operated on, and x is the logarithm.
                </p>

                <h3>Basic Laws of Logarithms</h3>

                <div class="formula">
                    log(ab) = log a + log b
                </div>

                <div class="formula">
                    log(a/b) = log a − log b
                </div>

                <div class="formula">
                    log(a<sup>n</sup>) = n log a
                </div>

                <h3>Worked Examples</h3>

                <div class="example">
                    <strong>Worked Example 1</strong>

                    Evaluate log<sub>10</sub>1000.

                    <br><br>

                    Since 10<sup>3</sup> = 1000,

                    <br>

                    log<sub>10</sub>1000 = <strong>3</strong>
                </div>

                <div class="example">
                    <strong>Worked Example 2</strong>

                    Simplify log 20 + log 5.

                    <br><br>

                    Using log a + log b = log(ab):

                    <br>

                    log(20 × 5)

                    <br>

                    = log 100

                    <br>

                    = <strong>2</strong>
                </div>

                <div class="example">
                    <strong>Worked Example 3</strong>

                    Solve log<sub>10</sub>x = 4.

                    <br><br>

                    Convert to index form:

                    <br>

                    x = 10<sup>4</sup>

                    <br>

                    Therefore x = <strong>10,000</strong>.
                </div>

                <h3>Practice Questions</h3>

                <div class="practice">
                    <ol>
                        <li>Evaluate log<sub>10</sub>10,000.</li>
                        <li>Evaluate log<sub>2</sub>32.</li>
                        <li>Simplify log 4 + log 25.</li>
                        <li>Solve log<sub>10</sub>x = 3.</li>
                        <li>If log<sub>2</sub>x = 5, find x.</li>
                    </ol>
                </div>

                <h3>Answers</h3>

                <div class="answers">
                    <ol>
                        <li>4</li>
                        <li>5</li>
                        <li>2</li>
                        <li>1,000</li>
                        <li>32</li>
                    </ol>
                </div>

            </div>
        `
    },


    // ========================================================
    // TOPIC 3
    // ========================================================

    3: {
        title: "Indices and Exponential Equations",

        lesson: `
            <div class="lesson-section">

                <h3>Lesson</h3>

                <p>
                    An index is a power to which a number is raised.
                    For example, in 2<sup>5</sup>, the number 5 is the index.
                </p>

                <h3>Laws of Indices</h3>

                <div class="formula">
                    a<sup>m</sup> × a<sup>n</sup> = a<sup>m+n</sup>
                </div>

                <div class="formula">
                    a<sup>m</sup> ÷ a<sup>n</sup> = a<sup>m−n</sup>
                </div>

                <div class="formula">
                    (a<sup>m</sup>)<sup>n</sup> = a<sup>mn</sup>
                </div>

                <div class="formula">
                    a<sup>0</sup> = 1
                </div>

                <div class="formula">
                    a<sup>−n</sup> = 1/a<sup>n</sup>
                </div>

                <h3>Worked Examples</h3>

                <div class="example">
                    <strong>Worked Example 1</strong>

                    Simplify 2<sup>3</sup> × 2<sup>4</sup>.

                    <br><br>

                    = 2<sup>3+4</sup>

                    <br>

                    = 2<sup>7</sup>

                    <br>

                    = <strong>128</strong>
                </div>

                <div class="example">
                    <strong>Worked Example 2</strong>

                    Simplify 5<sup>7</sup> ÷ 5<sup>3</sup>.

                    <br><br>

                    = 5<sup>7−3</sup>

                    <br>

                    = 5<sup>4</sup>

                    <br>

                    = <strong>625</strong>
                </div>

                <div class="example">
                    <strong>Worked Example 3</strong>

                    Solve 2<sup>x</sup> = 32.

                    <br><br>

                    Since 32 = 2<sup>5</sup>,

                    <br>

                    x = <strong>5</strong>.
                </div>

                <h3>Practice Questions</h3>

                <div class="practice">
                    <ol>
                        <li>Simplify 3<sup>2</sup> × 3<sup>5</sup>.</li>
                        <li>Simplify 7<sup>6</sup> ÷ 7<sup>2</sup>.</li>
                        <li>Evaluate 4<sup>0</sup>.</li>
                        <li>Express 2<sup>−3</sup> as a fraction.</li>
                        <li>Solve 3<sup>x</sup> = 81.</li>
                    </ol>
                </div>

                <h3>Answers</h3>

                <div class="answers">
                    <ol>
                        <li>3<sup>7</sup> = 2,187</li>
                        <li>7<sup>4</sup> = 2,401</li>
                        <li>1</li>
                        <li>1/8</li>
                        <li>x = 4</li>
                    </ol>
                </div>

            </div>
        `
    },


    // ========================================================
    // TOPIC 4
    // ========================================================

    4: {
        title: "Quadratic Equations",

        lesson: `
            <div class="lesson-section">

                <h3>Lesson</h3>

                <p>
                    A quadratic equation is an equation of the form:
                </p>

                <div class="formula">
                    ax<sup>2</sup> + bx + c = 0, where a ≠ 0
                </div>

                <p>
                    Quadratic equations can be solved by factorisation,
                    completing the square, or the quadratic formula.
                </p>

                <h3>Factorisation</h3>

                <div class="example">
                    <strong>Worked Example 1</strong>

                    Solve x<sup>2</sup> + 5x + 6 = 0.

                    <br><br>

                    Find two numbers whose product is 6 and whose sum is 5:

                    <br>

                    2 and 3.

                    <br><br>

                    Therefore:

                    <br>

                    (x + 2)(x + 3) = 0

                    <br><br>

                    x + 2 = 0 or x + 3 = 0

                    <br>

                    Therefore:

                    <br>

                    <strong>x = −2 or x = −3</strong>
                </div>

                <h3>Quadratic Formula</h3>

                <div class="formula">
                    x = (−b ± √(b² − 4ac)) / 2a
                </div>

                <div class="example">
                    <strong>Worked Example 2</strong>

                    Solve 2x<sup>2</sup> + 3x − 2 = 0.

                    <br><br>

                    a = 2, b = 3, c = −2

                    <br><br>

                    x = (−3 ± √(9 + 16))/4

                    <br>

                    x = (−3 ± 5)/4

                    <br><br>

                    Therefore:

                    <br>

                    x = 1/2 or x = <strong>−2</strong>
                </div>

                <h3>Practical Application</h3>

                <div class="example">
                    <strong>Worked Example 3</strong>

                    The area of a rectangular garden is 48 m².
                    Its length is 2 m more than its width.
                    Find the dimensions.

                    <br><br>

                    Let the width = x m.

                    <br>

                    Length = x + 2 m.

                    <br><br>

                    Area:

                    <br>

                    x(x + 2) = 48

                    <br>

                    x² + 2x − 48 = 0

                    <br>

                    (x + 8)(x − 6) = 0

                    <br><br>

                    Since a length cannot be negative:

                    <br>

                    x = 6.

                    <br>

                    Width = <strong>6 m</strong>

                    <br>

                    Length = <strong>8 m</strong>.
                </div>

                <h3>Practice Questions</h3>

                <div class="practice">
                    <ol>
                        <li>Solve x² + 7x + 12 = 0.</li>
                        <li>Solve x² − 9x + 20 = 0.</li>
                        <li>Solve 2x² − x − 3 = 0.</li>
                        <li>The product of two consecutive positive integers is 56. Find the integers.</li>
                        <li>A rectangle has area 60 m². Its length is 7 m more than its width. Find its dimensions.</li>
                    </ol>
                </div>

                <h3>Answers</h3>

                <div class="answers">
                    <ol>
                        <li>x = −3 or −4</li>
                        <li>x = 4 or 5</li>
                        <li>x = 3/2 or −1</li>
                        <li>7 and 8</li>
                        <li>Width = 5 m, Length = 12 m</li>
                    </ol>
                </div>

            </div>
        `
    },


    // ========================================================
    // TOPIC 5
    // ========================================================

    5: {
        title: "Sequence and Series",

        lesson: `
            <div class="lesson-section">

                <h3>Lesson</h3>

                <p>
                    A sequence is an ordered list of numbers that follows
                    a particular pattern.
                </p>

                <p>
                    A series is obtained when the terms of a sequence are
                    added together.
                </p>

                <h3>Arithmetic Progression</h3>

                <p>
                    An arithmetic progression (AP) is a sequence in which
                    the difference between consecutive terms is constant.
                </p>

                <div class="formula">
                    T<sub>n</sub> = a + (n − 1)d
                </div>

                <p>
                    Where a is the first term, d is the common difference,
                    and n is the number of the term.
                </p>

                <div class="example">
                    <strong>Worked Example 1</strong>

                    Find the 10th term of:

                    <br>

                    3, 7, 11, 15, ...

                    <br><br>

                    a = 3

                    <br>

                    d = 4

                    <br>

                    n = 10

                    <br><br>

                    T₁₀ = 3 + (10 − 1)4

                    <br>

                    = 3 + 36

                    <br>

                    = <strong>39</strong>
                </div>

                <h3>Sum of an Arithmetic Progression</h3>

                <div class="formula">
                    S<sub>n</sub> = n/2 [2a + (n − 1)d]
                </div>

                <div class="example">
                    <strong>Worked Example 2</strong>

                    Find the sum of the first 20 terms of:

                    <br>

                    2, 5, 8, 11, ...

                    <br><br>

                    a = 2, d = 3, n = 20

                    <br><br>

                    S₂₀ = 20/2 [2(2) + 19(3)]

                    <br>

                    = 10(4 + 57)

                    <br>

                    = <strong>610</strong>
                </div>

                <h3>Geometric Progression</h3>

                <p>
                    A geometric progression (GP) is a sequence in which
                    each term is obtained by multiplying the previous term
                    by a constant number called the common ratio.
                </p>

                <div class="formula">
                    T<sub>n</sub> = ar<sup>n−1</sup>
                </div>

                <div class="example">
                    <strong>Worked Example 3</strong>

                    Find the 5th term of:

                    <br>

                    2, 6, 18, 54, ...

                    <br><br>

                    a = 2, r = 3

                    <br>

                    T₅ = 2(3<sup>4</sup>)

                    <br>

                    = <strong>162</strong>
                </div>

                <h3>Practice Questions</h3>

                <div class="practice">
                    <ol>
                        <li>Find the 15th term of 4, 7, 10, 13, ...</li>
                        <li>Find the common difference of 20, 16, 12, 8, ...</li>
                        <li>Find the sum of the first 10 terms of 5, 8, 11, ...</li>
                        <li>Find the 6th term of the GP 3, 6, 12, 24, ...</li>
                        <li>A student saves ₦500 in the first week and increases the saving by ₦200 every week. How much is saved in the 10th week?</li>
                    </ol>
                </div>

                <h3>Answers</h3>

                <div class="answers">
                    <ol>
                        <li>46</li>
                        <li>−4</li>
                        <li>185</li>
                        <li>96</li>
                        <li>₦2,300</li>
                    </ol>
                </div>

            </div>
        `
    }

};


// ============================================================
// DISPLAY TOPICS IN THE SELECT MENU
// ============================================================

const topicSelect = document.getElementById("topicSelect");

if (topicSelect) {

    Object.keys(topics).forEach(number => {

        const option = document.createElement("option");

        option.value = number;
        option.textContent =
            `Topic ${number}: ${topics[number].title}`;

        topicSelect.appendChild(option);

    });

}


// ============================================================
// SHOW SELECTED TOPIC
// ============================================================

function showTopic() {

    const selectedTopic =
        document.getElementById("topicSelect").value;

    const lesson =
        document.getElementById("lesson");

    if (!selectedTopic) {

        lesson.innerHTML = `
            <div class="welcome-box">

                <h2>Welcome to SSS 2 Mathematics</h2>

                <p>
                    Select a topic above to begin learning.
                </p>

            </div>
        `;

        return;
    }

    const topic = topics[selectedTopic];

    lesson.innerHTML = `

        <h2 class="topic-title">
            Topic ${selectedTopic}: ${topic.title}
        </h2>

        ${topic.lesson}

    `;

}
