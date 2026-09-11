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

        ${    // ========================================================
    // TOPIC 6
    // ========================================================

    6: {
        title: "Variation",

        lesson: `
            <div class="lesson-section">

                <h3>Lesson</h3>

                <p>
                    Variation describes how one quantity changes in relation
                    to another quantity. The major types are direct,
                    inverse, joint and partial variation.
                </p>

                <h3>Direct Variation</h3>

                <p>
                    If y varies directly as x, we write:
                </p>

                <div class="formula">
                    y ∝ x
                    <br>
                    y = kx
                </div>

                <p>
                    where k is the constant of proportionality.
                </p>

                <div class="example">
                    <strong>Worked Example 1</strong>

                    y varies directly as x. If y = 12 when x = 4,
                    find y when x = 10.

                    <br><br>

                    y = kx

                    <br>

                    12 = 4k

                    <br>

                    k = 3

                    <br><br>

                    Therefore y = 3x.

                    <br>

                    When x = 10:

                    <br>

                    y = 3(10) = <strong>30</strong>
                </div>

                <h3>Inverse Variation</h3>

                <p>
                    If y varies inversely as x:
                </p>

                <div class="formula">
                    y ∝ 1/x
                    <br>
                    y = k/x
                </div>

                <div class="example">
                    <strong>Worked Example 2</strong>

                    y varies inversely as x. If y = 8 when x = 3,
                    find y when x = 12.

                    <br><br>

                    y = k/x

                    <br>

                    8 = k/3

                    <br>

                    k = 24

                    <br><br>

                    Therefore:

                    <br>

                    y = 24/x

                    <br>

                    When x = 12:

                    <br>

                    y = 24/12 = <strong>2</strong>
                </div>

                <h3>Practical Application</h3>

                <div class="example">
                    <strong>Worked Example 3</strong>

                    The time required to complete a job varies inversely
                    as the number of workers. If 6 workers take 10 days,
                    how many days will 12 workers take?

                    <br><br>

                    Workers × time = constant.

                    <br>

                    6 × 10 = 12 × t

                    <br>

                    60 = 12t

                    <br>

                    t = <strong>5 days</strong>
                </div>

                <h3>Practice Questions</h3>

                <div class="practice">
                    <ol>
                        <li>
                            y varies directly as x. If y = 15 when x = 5,
                            find y when x = 12.
                        </li>
                        <li>
                            y varies inversely as x. If y = 6 when x = 4,
                            find y when x = 8.
                        </li>
                        <li>
                            If 8 workers complete a task in 15 days,
                            how many days will 12 workers take,
                            assuming the work rate is the same?
                        </li>
                        <li>
                            If y = kx and y = 24 when x = 6,
                            find k.
                        </li>
                        <li>
                            If y = k/x and y = 5 when x = 8,
                            find y when x = 20.
                        </li>
                    </ol>
                </div>

                <h3>Answers</h3>

                <div class="answers">
                    <ol>
                        <li>36</li>
                        <li>3</li>
                        <li>10 days</li>
                        <li>4</li>
                        <li>2</li>
                    </ol>
                </div>

            </div>
        `
    },


    // ========================================================
    // TOPIC 7
    // ========================================================

    7: {
        title: "Permutation",

        lesson: `
            <div class="lesson-section">

                <h3>Lesson</h3>

                <p>
                    A permutation is an arrangement of objects in which
                    the order of arrangement matters.
                </p>

                <div class="formula">
                    n! = n × (n − 1) × (n − 2) × ... × 1
                </div>

                <p>
                    For example:
                </p>

                <div class="formula">
                    5! = 5 × 4 × 3 × 2 × 1 = 120
                </div>

                <h3>Permutation Formula</h3>

                <div class="formula">
                    ⁿPᵣ = n! / (n − r)!
                </div>

                <div class="example">
                    <strong>Worked Example 1</strong>

                    In how many ways can 3 students be selected and
                    arranged from 5 students?

                    <br><br>

                    ⁵P₃ = 5!/(5−3)!

                    <br>

                    = 5!/2!

                    <br>

                    = (5 × 4 × 3 × 2 × 1)/(2 × 1)

                    <br>

                    = <strong>60</strong>
                </div>

                <h3>Arrangements of All Objects</h3>

                <div class="example">
                    <strong>Worked Example 2</strong>

                    In how many ways can the letters A, B, C and D
                    be arranged?

                    <br><br>

                    Number of arrangements = 4!

                    <br>

                    = 4 × 3 × 2 × 1

                    <br>

                    = <strong>24</strong>
                </div>

                <h3>Practical Application</h3>

                <div class="example">
                    <strong>Worked Example 3</strong>

                    Five students are competing for the positions of
                    class captain, assistant captain and secretary.
                    In how many ways can the positions be filled?

                    <br><br>

                    The positions are different, so order matters.

                    <br>

                    ⁵P₃ = 5 × 4 × 3

                    <br>

                    = <strong>60 ways</strong>
                </div>

                <h3>Practice Questions</h3>

                <div class="practice">
                    <ol>
                        <li>Evaluate 6!.</li>
                        <li>Find ⁷P₂.</li>
                        <li>How many ways can 4 books be arranged on a shelf?</li>
                        <li>How many 3-letter arrangements can be made from A, B, C, D and E without repetition?</li>
                        <li>Seven students are competing for the positions of president and secretary. In how many ways can the positions be filled?</li>
                    </ol>
                </div>

                <h3>Answers</h3>

                <div class="answers">
                    <ol>
                        <li>720</li>
                        <li>42</li>
                        <li>24</li>
                        <li>60</li>
                        <li>42</li>
                    </ol>
                </div>

            </div>
        `
    },


    // ========================================================
    // TOPIC 8
    // ========================================================

    8: {
        title: "Combination",

        lesson: `
            <div class="lesson-section">

                <h3>Lesson</h3>

                <p>
                    A combination is a selection of objects where the order
                    of selection does not matter.
                </p>

                <div class="formula">
                    ⁿCᵣ = n! / [r!(n − r)!]
                </div>

                <p>
                    The major difference between permutation and combination
                    is that permutation considers arrangement, while
                    combination considers selection.
                </p>

                <div class="example">
                    <strong>Worked Example 1</strong>

                    Find ⁵C₂.

                    <br><br>

                    ⁵C₂ = 5!/[2!3!]

                    <br>

                    = (5 × 4)/(2 × 1)

                    <br>

                    = <strong>10</strong>
                </div>

                <div class="example">
                    <strong>Worked Example 2</strong>

                    A committee of 3 students is to be selected from
                    8 students. How many different committees are possible?

                    <br><br>

                    ⁸C₃ = 8!/[3!5!]

                    <br>

                    = (8 × 7 × 6)/(3 × 2 × 1)

                    <br>

                    = <strong>56</strong>
                </div>

                <h3>Practical Application</h3>

                <div class="example">
                    <strong>Worked Example 3</strong>

                    A football team has 12 players available.
                    How many different groups of 5 players can be selected
                    for a training exercise?

                    <br><br>

                    Order does not matter.

                    <br>

                    ¹²C₅ = 12!/(5!7!)

                    <br>

                    = <strong>792</strong>
                </div>

                <h3>Practice Questions</h3>

                <div class="practice">
                    <ol>
                        <li>Find ⁶C₂.</li>
                        <li>Find ⁷C₃.</li>
                        <li>How many ways can 4 students be selected from 10 students?</li>
                        <li>A committee of 5 people is selected from 9 people. How many committees are possible?</li>
                        <li>From 12 books, how many ways can 3 books be selected?</li>
                    </ol>
                </div>

                <h3>Answers</h3>

                <div class="answers">
                    <ol>
                        <li>15</li>
                        <li>35</li>
                        <li>210</li>
                        <li>126</li>
                        <li>220</li>
                    </ol>
                </div>

            </div>
        `
    },


    // ========================================================
    // TOPIC 9
    // ========================================================

    9: {
        title: "Probability",

        lesson: `
            <div class="lesson-section">

                <h3>Lesson</h3>

                <p>
                    Probability measures how likely an event is to occur.
                    Its value lies between 0 and 1.
                </p>

                <div class="formula">
                    P(E) = Number of favourable outcomes /
                    Total number of possible outcomes
                </div>

                <p>
                    A probability of 0 means the event is impossible,
                    while a probability of 1 means the event is certain.
                </p>

                <h3>Complement of an Event</h3>

                <div class="formula">
                    P(E') = 1 − P(E)
                </div>

                <div class="example">
                    <strong>Worked Example 1</strong>

                    A fair die is thrown once. Find the probability
                    of obtaining an even number.

                    <br><br>

                    Possible outcomes:

                    <br>

                    1, 2, 3, 4, 5, 6

                    <br><br>

                    Even outcomes:

                    <br>

                    2, 4, 6

                    <br><br>

                    Therefore:

                    <br>

                    P(even) = 3/6 = <strong>1/2</strong>
                </div>

                <h3>Probability Using a Bag of Objects</h3>

                <div class="example">
                    <strong>Worked Example 2</strong>

                    A bag contains 5 red balls and 3 blue balls.
                    One ball is selected at random. Find the probability
                    that it is blue.

                    <br><br>

                    Total balls = 5 + 3 = 8

                    <br>

                    Blue balls = 3

                    <br>

                    P(blue) = <strong>3/8</strong>
                </div>

                <h3>Practical Application</h3>

                <div class="example">
                    <strong>Worked Example 3</strong>

                    The probability that a student passes Mathematics is
                    0.7. Find the probability that the student does not pass.

                    <br><br>

                    P(not pass) = 1 − 0.7

                    <br>

                    = <strong>0.3</strong>
                </div>

                <h3>Practice Questions</h3>

                <div class="practice">
                    <ol>
                        <li>
                            A fair coin is tossed once. Find the probability
                            of obtaining a head.
                        </li>
                        <li>
                            A fair die is thrown. Find the probability
                            of obtaining a number greater than 4.
                        </li>
                        <li>
                            A box contains 4 white and 6 black balls.
                            Find the probability of selecting a white ball.
                        </li>
                        <li>
                            If P(A) = 0.35, find P(A').
                        </li>
                        <li>
                            A class has 20 boys and 30 girls. If one student
                            is selected at random, find the probability
                            of selecting a girl.
                        </li>
                    </ol>
                </div>

                <h3>Answers</h3>

                <div class="answers">
                    <ol>
                        <li>1/2</li>
                        <li>1/3</li>
                        <li>2/5</li>
                        <li>0.65</li>
                        <li>3/5</li>
                    </ol>
                </div>

            </div>
        `
    },


    // ========================================================
    // TOPIC 10
    // ========================================================

    10: {
        title: "Matrices",

        lesson: `
            <div class="lesson-section">

                <h3>Lesson</h3>

                <p>
                    A matrix is a rectangular arrangement of numbers,
                    symbols or expressions arranged in rows and columns.
                </p>

                <p>
                    The number of rows and columns determines the order
                    of a matrix.
                </p>

                <div class="formula">
                    Order of matrix = number of rows × number of columns
                </div>

                <h3>Example of a Matrix</h3>

                <div class="formula">
                    A =
                    [ 2 &nbsp; 4 ]
                    <br>
                    [ 3 &nbsp; 5 ]
                </div>

                <p>
                    Matrix A has 2 rows and 2 columns, so its order is 2 × 2.
                </p>

                <h3>Addition of Matrices</h3>

                <p>
                    Matrices can be added only when they have the same order.
                    Corresponding elements are added together.
                </p>

                <div class="example">
                    <strong>Worked Example 1</strong>

                    Given:

                    <br><br>

                    A = [ 2  3 ]

                    <br>

                    &nbsp;&nbsp;&nbsp;&nbsp;[ 4  5 ]

                    <br><br>

                    B = [ 1  6 ]

                    <br>

                    &nbsp;&nbsp;&nbsp;&nbsp;[ 2  3 ]

                    <br><br>

                    A + B =

                    <br>

                    [ 3  9 ]

                    <br>

                    [ 6  8 ]
                </div>

                <h3>Multiplication by a Scalar</h3>

                <div class="example">
                    <strong>Worked Example 2</strong>

                    Given:

                    <br>

                    A = [ 2  4 ]

                    <br>

                    Find 3A.

                    <br><br>

                    3A = [ 6  12 ]
                </div>

                <h3>Matrix Multiplication</h3>

                <p>
                    For matrix multiplication, the number of columns in the
                    first matrix must equal the number of rows in the second.
                </p>

                <div class="example">
                    <strong>Worked Example 3</strong>

                    Given:

                    <br>

                    A = [ 1  2 ]

                    <br>

                    &nbsp;&nbsp;&nbsp;&nbsp;[ 3  4 ]

                    <br><br>

                    B = [ 2  0 ]

                    <br>

                    &nbsp;&nbsp;&nbsp;&nbsp;[ 1  2 ]

                    <br><br>

                    AB =

                    <br>

                    [ (1×2)+(2×1) &nbsp; (1×0)+(2×2) ]

                    <br>

                    [ (3×2)+(4×1) &nbsp; (3×0)+(4×2) ]

                    <br><br>

                    Therefore:

                    <br>

                    AB =

                    <br>

                    [ 4  4 ]

                    <br>

                    [ 10  8 ]
                </div>

                <h3>Practice Questions</h3>

                <div class="practice">
                    <ol>
                        <li>
                            State the order of a matrix having 3 rows and
                            4 columns.
                        </li>
                        <li>
                            Add [1 2; 3 4] and [5 6; 7 8].
                        </li>
                        <li>
                            If A = [2 3; 4 5], find 2A.
                        </li>
                        <li>
                            State the condition required for two matrices
                            to be added.
                        </li>
                        <li>
                            Multiply [1 2; 0 3] by [2 1; 4 0].
                        </li>
                    </ol>
                </div>

                <h3>Answers</h3>

                <div class="answers">
                    <ol>
                        <li>3 × 4</li>
                        <li>[6 8; 10 12]</li>
                        <li>[4 6; 8 10]</li>
                        <li>They must have the same order.</li>
                        <li>[10 1; 12 0]</li>
                    </ol>
                </div>

            </div>
        `
    },.    // =========================================================
    // TOPIC 11: LINEAR EQUATIONS
    // =========================================================

    11: {
        title: "Linear Equations",

        lesson: `
            <h3>Lesson</h3>
            <p>A linear equation is an equation in which the highest power of the unknown is 1.</p>

            <p>Examples include:</p>
            <ul>
                <li>2x + 5 = 17</li>
                <li>3x - 7 = 11</li>
                <li>5(x + 2) = 25</li>
            </ul>

            <p>The main aim when solving a linear equation is to find the value of the unknown.</p>

            <h3>Rules for Solving Equations</h3>
            <p>Whatever operation is performed on one side of an equation must also be performed on the other side.</p>

            <p>Useful operations include:</p>
            <ul>
                <li>Adding or subtracting the same number on both sides.</li>
                <li>Multiplying or dividing both sides by the same non-zero number.</li>
                <li>Removing brackets by expansion.</li>
                <li>Collecting like terms.</li>
            </ul>

            <h3>Worked Examples</h3>

            <p><strong>Example 1:</strong> Solve 3x + 7 = 22.</p>
            <p>3x = 22 - 7</p>
            <p>3x = 15</p>
            <p>x = 5</p>

            <p><strong>Example 2:</strong> Solve 5x - 9 = 16.</p>
            <p>5x = 16 + 9</p>
            <p>5x = 25</p>
            <p>x = 5</p>

            <p><strong>Example 3:</strong> Solve 4(x + 3) = 28.</p>
            <p>Divide both sides by 4:</p>
            <p>x + 3 = 7</p>
            <p>x = 4</p>

            <p><strong>Example 4:</strong> Solve 3(x - 2) + 5 = 17.</p>
            <p>3x - 6 + 5 = 17</p>
            <p>3x - 1 = 17</p>
            <p>3x = 18</p>
            <p>x = 6</p>

            <h3>Practice Questions</h3>
            <ol>
                <li>Solve 2x + 5 = 19.</li>
                <li>Solve 7x - 4 = 31.</li>
                <li>Solve 6(x + 2) = 42.</li>
                <li>Solve 4x - 3 = 2x + 11.</li>
                <li>Solve 5(x - 1) + 2 = 22.</li>
            </ol>

            <h3>Answers</h3>
            <ol>
                <li>x = 7</li>
                <li>x = 5</li>
                <li>x = 5</li>
                <li>x = 7</li>
                <li>x = 5</li>
            </ol>
        `
    },


    // =========================================================
    // TOPIC 12: CHANGE OF SUBJECT OF FORMULA
    // =========================================================

    12: {
        title: "Change of Subject of Formula",

        lesson: `
            <h3>Lesson</h3>
            <p>A formula is an equation that shows the relationship between quantities. Changing the subject of a formula means rearranging the formula so that a different variable is alone on one side.</p>

            <p>For example, from:</p>
            <p><strong>v = u + at</strong></p>
            <p>we can make <strong>t</strong> the subject:</p>
            <p><strong>t = (v - u) / a</strong></p>

            <h3>Basic Principles</h3>
            <ul>
                <li>Identify the variable that must become the subject.</li>
                <li>Use inverse operations to isolate it.</li>
                <li>Perform the same operation on both sides.</li>
                <li>Simplify the final expression.</li>
            </ul>

            <h3>Worked Examples</h3>

            <p><strong>Example 1:</strong> Make x the subject of y = 3x + 5.</p>
            <p>y - 5 = 3x</p>
            <p><strong>x = (y - 5)/3</strong></p>

            <p><strong>Example 2:</strong> Make t the subject of v = u + at.</p>
            <p>v - u = at</p>
            <p><strong>t = (v - u)/a</strong></p>

            <p><strong>Example 3:</strong> Make r the subject of A = πr².</p>
            <p>Divide by π:</p>
            <p>A/π = r²</p>
            <p>Take the positive square root:</p>
            <p><strong>r = √(A/π)</strong></p>

            <p><strong>Example 4:</strong> Make b the subject of A = ½(a + b)h.</p>
            <p>Multiply both sides by 2:</p>
            <p>2A = (a + b)h</p>
            <p>Divide by h:</p>
            <p>2A/h = a + b</p>
            <p>Therefore:</p>
            <p><strong>b = 2A/h - a</strong></p>

            <h3>Practice Questions</h3>
            <ol>
                <li>Make x the subject of y = 4x + 7.</li>
                <li>Make t the subject of s = ut + ½at² when the formula is first rearranged for the required variable where appropriate.</li>
                <li>Make r the subject of C = 2πr.</li>
                <li>Make h the subject of A = ½bh.</li>
                <li>Make x the subject of y = (x + 3)/5.</li>
            </ol>

            <h3>Answers</h3>
            <ol>
                <li>x = (y - 7)/4</li>
                <li>This requires solving a quadratic equation in t; it is not obtained by simple linear rearrangement.</li>
                <li>r = C/(2π)</li>
                <li>h = 2A/b</li>
                <li>x = 5y - 3</li>
            </ol>
        `
    },


    // =========================================================
    // TOPIC 13: SIMULTANEOUS EQUATIONS
    // =========================================================

    13: {
        title: "Simultaneous Equations",

        lesson: `
            <h3>Lesson</h3>
            <p>Simultaneous equations are two or more equations containing two or more unknowns. The solution must satisfy all the equations at the same time.</p>

            <p>Two common methods for solving simultaneous linear equations are:</p>
            <ul>
                <li>Elimination method</li>
                <li>Substitution method</li>
            </ul>

            <h3>Elimination Method</h3>
            <p>The elimination method involves adding or subtracting equations so that one of the unknowns is eliminated.</p>

            <h3>Worked Example 1</h3>
            <p>Solve:</p>
            <p>x + y = 10</p>
            <p>x - y = 2</p>

            <p>Add the equations:</p>
            <p>2x = 12</p>
            <p>x = 6</p>

            <p>Substitute x = 6 into x + y = 10:</p>
            <p>6 + y = 10</p>
            <p>y = 4</p>

            <p><strong>Therefore, x = 6 and y = 4.</strong></p>

            <h3>Worked Example 2</h3>
            <p>Solve:</p>
            <p>2x + y = 11</p>
            <p>x - y = 1</p>

            <p>Add the equations:</p>
            <p>3x = 12</p>
            <p>x = 4</p>

            <p>Substitute into x - y = 1:</p>
            <p>4 - y = 1</p>
            <p>y = 3</p>

            <h3>Substitution Method</h3>
            <p>From one equation, express one unknown in terms of the other and substitute it into the second equation.</p>

            <p><strong>Example 3:</strong></p>
            <p>y = 2x + 1</p>
            <p>x + y = 10</p>

            <p>Substitute y = 2x + 1:</p>
            <p>x + 2x + 1 = 10</p>
            <p>3x = 9</p>
            <p>x = 3</p>

            <p>Therefore:</p>
            <p>y = 2(3) + 1 = 7</p>

            <h3>Practice Questions</h3>
            <ol>
                <li>Solve x + y = 12 and x - y = 4.</li>
                <li>Solve 2x + y = 13 and x - y = 2.</li>
                <li>Solve 3x + y = 14 and x + y = 8.</li>
                <li>Solve x + 2y = 11 and x - y = 2.</li>
                <li>Solve 2x + 3y = 13 and x + y = 5.</li>
            </ol>

            <h3>Answers</h3>
            <ol>
                <li>x = 8, y = 4</li>
                <li>x = 5, y = 3</li>
                <li>x = 3, y = 5</li>
                <li>x = 5, y = 3</li>
                <li>x = 2, y = 3</li>
            </ol>
        `
    },


    // =========================================================
    // TOPIC 14: QUADRATIC EQUATIONS
    // =========================================================

    14: {
        title: "Quadratic Equations",

        lesson: `
            <h3>Lesson</h3>
            <p>A quadratic equation is an equation in which the highest power of the unknown is 2.</p>

            <p>The general form is:</p>
            <p><strong>ax² + bx + c = 0</strong>, where a ≠ 0.</p>

            <p>Quadratic equations can be solved by:</p>
            <ul>
                <li>Factorization</li>
                <li>Completing the square</li>
                <li>Quadratic formula</li>
            </ul>

            <h3>Factorization</h3>
            <p>To factorize x² + bx + c, find two numbers whose product is c and whose sum is b.</p>

            <h3>Worked Example 1</h3>
            <p>Solve x² + 5x + 6 = 0.</p>

            <p>Find two numbers whose product is 6 and sum is 5.</p>
            <p>The numbers are 2 and 3.</p>

            <p>Therefore:</p>
            <p>(x + 2)(x + 3) = 0</p>

            <p>Hence:</p>
            <p>x + 2 = 0 or x + 3 = 0</p>
            <p><strong>x = -2 or x = -3</strong></p>

            <h3>Worked Example 2</h3>
            <p>Solve x² - 7x + 12 = 0.</p>

            <p>(x - 3)(x - 4) = 0</p>

            <p>Therefore:</p>
            <p><strong>x = 3 or x = 4</strong></p>

            <h3>Quadratic Formula</h3>
            <p>For ax² + bx + c = 0:</p>
            <p><strong>x = (-b ± √(b² - 4ac))/(2a)</strong></p>

            <h3>Worked Example 3</h3>
            <p>Solve 2x² + 3x - 2 = 0.</p>

            <p>Here, a = 2, b = 3 and c = -2.</p>

            <p>x = [-3 ± √(3² - 4(2)(-2))]/4</p>
            <p>x = [-3 ± √25]/4</p>
            <p>x = (-3 ± 5)/4</p>

            <p>Therefore:</p>
            <p><strong>x = 1/2 or x = -2</strong></p>

            <h3>Practice Questions</h3>
            <ol>
                <li>Solve x² + 7x + 12 = 0.</li>
                <li>Solve x² - 9x + 20 = 0.</li>
                <li>Solve x² - x - 12 = 0.</li>
                <li>Solve 2x² - 5x + 2 = 0.</li>
                <li>Solve x² + 2x - 15 = 0.</li>
            </ol>

            <h3>Answers</h3>
            <ol>
                <li>x = -3 or -4</li>
                <li>x = 4 or 5</li>
                <li>x = 4 or -3</li>
                <li>x = 2 or 1/2</li>
                <li>x = 3 or -5</li>
            </ol>
        `
    },


    // =========================================================
    // TOPIC 15: VARIATION
    // =========================================================

    15: {
        title: "Variation",

        lesson: `
            <h3>Lesson</h3>
            <p>Variation describes how one quantity changes in relation to another quantity.</p>

            <p>The major types studied are:</p>
            <ul>
                <li>Direct variation</li>
                <li>Inverse variation</li>
                <li>Joint variation</li>
                <li>Partial variation</li>
            </ul>

            <h3>Direct Variation</h3>
            <p>If y varies directly as x, then:</p>
            <p><strong>y ∝ x</strong></p>
            <p>Therefore:</p>
            <p><strong>y = kx</strong></p>
            <p>where k is the constant of variation.</p>

            <h3>Worked Example 1</h3>
            <p>y varies directly as x. If y = 12 when x = 4, find y when x = 7.</p>

            <p>y = kx</p>
            <p>12 = 4k</p>
            <p>k = 3</p>

            <p>Therefore:</p>
            <p>y = 3x</p>

            <p>When x = 7:</p>
            <p>y = 3(7) = <strong>21</strong></p>

            <h3>Inverse Variation</h3>
            <p>If y varies inversely as x:</p>
            <p><strong>y ∝ 1/x</strong></p>
            <p>Therefore:</p>
            <p><strong>y = k/x</strong></p>

            <h3>Worked Example 2</h3>
            <p>y varies inversely as x. If y = 8 when x = 3, find y when x = 12.</p>

            <p>y = k/x</p>
            <p>8 = k/3</p>
            <p>k = 24</p>

            <p>Therefore:</p>
            <p>y = 24/x</p>

            <p>When x = 12:</p>
            <p>y = 24/12 = <strong>2</strong></p>

            <h3>Joint Variation</h3>
            <p>If y varies jointly as x and z:</p>
            <p><strong>y = kxz</strong></p>

            <h3>Worked Example 3</h3>
            <p>y varies jointly as x and z. If y = 24 when x = 2 and z = 3, find y when x = 4 and z = 5.</p>

            <p>24 = k(2)(3)</p>
            <p>24 = 6k</p>
            <p>k = 4</p>

            <p>Thus:</p>
            <p>y = 4xz</p>

            <p>When x = 4 and z = 5:</p>
            <p>y = 4(4)(5) = <strong>80</strong></p>

            <h3>Practice Questions</h3>
            <ol>
                <li>y varies directly as x. If y = 15 when x = 5, find y when x = 8.</li>
                <li>y varies directly as x². If y = 20 when x = 2, find y when x = 4.</li>
                <li>y varies inversely as x. If y = 6 when x = 4, find y when x = 8.</li>
                <li>y varies inversely as x². If y = 18 when x = 2, find y when x = 6.</li>
                <li>y varies jointly as x and z. If y = 30 when x = 2 and z = 5, find y when x = 3 and z = 4.</li>
            </ol>

            <h3>Answers</h3>
            <ol>
                <li>y = 24</li>
                <li>y = 80</li>
                <li>y = 3</li>
                <li>y = 2</li>
                <li>y = 36</li>
            </ol>
        `
    },}

    `;

}
