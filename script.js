"use strict";

/*
============================================================
SSS 2 MATHEMATICS APP
45 TOPICS

BATCH 1: TOPICS 1 - 15
BATCH 2: TOPICS 16 - 30
BATCH 3: TOPICS 31 - 45

Each topic contains:
1. Detailed Lesson
2. Worked Examples
3. Practice Questions
4. Answers
============================================================
*/

const topics = {

    // ========================================================
    // TOPIC 1: SURDS
    // ========================================================

    1: {
        title: "Surds",

        lesson: `
            <h2>Lesson: Surds</h2>

            <p>A surd is an irrational number written in root form
            which cannot be expressed exactly as a rational number.</p>

            <p>Examples include √2, √3, √5 and √7.</p>

            <h3>Laws of Surds</h3>
            <ul>
                <li>√a × √b = √ab</li>
                <li>√a ÷ √b = √(a/b)</li>
                <li>(√a)² = a</li>
            </ul>

            <p>To simplify a surd, look for the largest perfect-square
            factor of the number.</p>

            <p>For example:</p>
            <p>√72 = √(36 × 2) = 6√2</p>

            <h3>Like and Unlike Surds</h3>
            <p>Like surds have the same irrational part and can be
            added or subtracted.</p>

            <p>For example:</p>
            <p>3√5 + 2√5 = 5√5</p>

            <p>Unlike surds cannot be combined directly.</p>

            <h3>Rationalising a Denominator</h3>
            <p>A denominator containing a surd can be rationalised by
            multiplying the numerator and denominator by a suitable surd.</p>
        `,

        examples: `
            <h3>Worked Examples</h3>

            <p><strong>Example 1:</strong> Simplify √72.</p>
            <p>
                √72 = √(36 × 2)<br>
                = 6√2
            </p>

            <p><strong>Example 2:</strong> Simplify 3√8 + 2√18.</p>
            <p>
                √8 = 2√2<br>
                √18 = 3√2
            </p>
            <p>
                3√8 + 2√18<br>
                = 3(2√2) + 2(3√2)<br>
                = 6√2 + 6√2<br>
                = 12√2
            </p>

            <p><strong>Example 3:</strong> Rationalise 5/√3.</p>
            <p>
                Multiply by √3/√3:
            </p>
            <p>
                5/√3 × √3/√3 = 5√3/3
            </p>
        `,

        practice: `
            <h3>Practice Questions</h3>
            <ol>
                <li>Simplify √48.</li>
                <li>Simplify 2√12 + √27.</li>
                <li>Simplify √5 × √20.</li>
                <li>Rationalise 4/√2.</li>
                <li>Simplify 3√50 − √8.</li>
            </ol>
        `,

        answers: `
            <h3>Answers</h3>
            <ol>
                <li>4√3</li>
                <li>7√3</li>
                <li>10</li>
                <li>2√2</li>
                <li>13√2</li>
            </ol>
        `
    },


    // ========================================================
    // TOPIC 2: LOGARITHMS
    // ========================================================

    2: {
        title: "Logarithms",

        lesson: `
            <h2>Lesson: Logarithms</h2>

            <p>A logarithm is another way of expressing an index.</p>

            <p>If a<sup>x</sup> = N, then:</p>

            <p><strong>log<sub>a</sub>N = x</strong></p>

            <p>For example, because 2<sup>3</sup> = 8:</p>

            <p>log<sub>2</sub>8 = 3</p>

            <h3>Laws of Logarithms</h3>
            <ul>
                <li>log<sub>a</sub>(MN) =
                    log<sub>a</sub>M + log<sub>a</sub>N</li>
                <li>log<sub>a</sub>(M/N) =
                    log<sub>a</sub>M − log<sub>a</sub>N</li>
                <li>log<sub>a</sub>(M<sup>n</sup>) =
                    n log<sub>a</sub>M</li>
            </ul>

            <p>The base must be positive and must not equal 1.</p>
        `,

        examples: `
            <h3>Worked Examples</h3>

            <p><strong>Example 1:</strong> Evaluate log<sub>2</sub>32.</p>
            <p>
                Since 2<sup>5</sup> = 32,<br>
                log<sub>2</sub>32 = 5.
            </p>

            <p><strong>Example 2:</strong> Simplify
            log<sub>3</sub>9 + log<sub>3</sub>27.</p>
            <p>
                log<sub>3</sub>9 = 2<br>
                log<sub>3</sub>27 = 3
            </p>
            <p>Therefore the answer is 5.</p>

            <p><strong>Example 3:</strong> Solve
            log<sub>2</sub>x = 6.</p>
            <p>
                x = 2<sup>6</sup> = 64.
            </p>
        `,

        practice: `
            <h3>Practice Questions</h3>
            <ol>
                <li>Evaluate log<sub>2</sub>16.</li>
                <li>Evaluate log<sub>5</sub>125.</li>
                <li>Simplify log<sub>3</sub>27 + log<sub>3</sub>9.</li>
                <li>Solve log<sub>2</sub>x = 7.</li>
                <li>Solve log<sub>10</sub>x = 3.</li>
            </ol>
        `,

        answers: `
            <h3>Answers</h3>
            <ol>
                <li>4</li>
                <li>3</li>
                <li>5</li>
                <li>x = 128</li>
                <li>x = 1000</li>
            </ol>
        `
    },


    // ========================================================
    // TOPIC 3: INDICES
    // ========================================================

    3: {
        title: "Indices",

        lesson: `
            <h2>Lesson: Indices</h2>

            <p>An index shows how many times a number is multiplied
            by itself.</p>

            <p>For example:</p>
            <p>2<sup>4</sup> = 2 × 2 × 2 × 2 = 16</p>

            <h3>Laws of Indices</h3>
            <ul>
                <li>a<sup>m</sup> × a<sup>n</sup> =
                    a<sup>m+n</sup></li>
                <li>a<sup>m</sup> ÷ a<sup>n</sup> =
                    a<sup>m−n</sup></li>
                <li>(a<sup>m</sup>)<sup>n</sup> =
                    a<sup>mn</sup></li>
                <li>a<sup>0</sup> = 1, where a ≠ 0</li>
                <li>a<sup>−n</sup> = 1/a<sup>n</sup></li>
            </ul>

            <p>Fractional indices are related to roots:</p>
            <p>a<sup>1/2</sup> = √a</p>
        `,

        examples: `
            <h3>Worked Examples</h3>

            <p><strong>Example 1:</strong> Simplify
            2<sup>3</sup> × 2<sup>5</sup>.</p>
            <p>
                = 2<sup>8</sup><br>
                = 256
            </p>

            <p><strong>Example 2:</strong> Simplify
            x<sup>7</sup> ÷ x<sup>3</sup>.</p>
            <p>
                = x<sup>4</sup>
            </p>

            <p><strong>Example 3:</strong> Evaluate
            16<sup>1/2</sup>.</p>
            <p>
                = √16<br>
                = 4
            </p>
        `,

        practice: `
            <h3>Practice Questions</h3>
            <ol>
                <li>Simplify 3<sup>2</sup> × 3<sup>4</sup>.</li>
                <li>Simplify 5<sup>7</sup> ÷ 5<sup>3</sup>.</li>
                <li>Simplify x<sup>6</sup> × x<sup>2</sup>.</li>
                <li>Evaluate 81<sup>1/2</sup>.</li>
                <li>Simplify 2<sup>−3</sup>.</li>
            </ol>
        `,

        answers: `
            <h3>Answers</h3>
            <ol>
                <li>729</li>
                <li>625</li>
                <li>x<sup>8</sup></li>
                <li>9</li>
                <li>1/8</li>
            </ol>
        `
    },


    // ========================================================
    // TOPIC 4: VARIATION
    // ========================================================

    4: {
        title: "Variation",

        lesson: `
            <h2>Lesson: Variation</h2>

            <p>Variation describes the relationship between quantities.</p>

            <h3>Direct Variation</h3>
            <p>If y varies directly as x:</p>
            <p><strong>y = kx</strong></p>

            <h3>Inverse Variation</h3>
            <p>If y varies inversely as x:</p>
            <p><strong>y = k/x</strong></p>
            <p>or xy = k.</p>

            <h3>Joint Variation</h3>
            <p>If y varies directly as x and z:</p>
            <p><strong>y = kxz</strong></p>
        `,

        examples: `
            <h3>Worked Examples</h3>

            <p><strong>Example 1:</strong> y varies directly as x.
            If y = 12 when x = 4, find y when x = 10.</p>

            <p>
                y = kx<br>
                12 = 4k<br>
                k = 3
            </p>

            <p>Therefore y = 3x.</p>
            <p>When x = 10:</p>
            <p>y = 30.</p>

            <p><strong>Example 2:</strong> y varies inversely as x.
            If y = 8 when x = 3, find y when x = 12.</p>

            <p>
                xy = k<br>
                8 × 3 = 24
            </p>

            <p>
                y = 24/12 = 2
            </p>
        `,

        practice: `
            <h3>Practice Questions</h3>
            <ol>
                <li>y varies directly as x. If y = 15 when x = 5,
                    find y when x = 12.</li>
                <li>y varies inversely as x. If y = 6 when x = 4,
                    find y when x = 8.</li>
                <li>If y = kx and y = 28 when x = 7, find k.</li>
                <li>p varies directly as q. If p = 18 when q = 6,
                    find p when q = 15.</li>
                <li>State the equation for inverse variation between
                    y and x.</li>
            </ol>
        `,

        answers: `
            <h3>Answers</h3>
            <ol>
                <li>36</li>
                <li>3</li>
                <li>4</li>
                <li>45</li>
                <li>y = k/x</li>
            </ol>
        `
    },


    // ========================================================
    // TOPIC 5: SEQUENCE AND SERIES
    // ========================================================

    5: {
        title: "Sequence and Series",

        lesson: `
            <h2>Lesson: Sequence and Series</h2>

            <p>A sequence is an ordered list of numbers following
            a particular pattern.</p>

            <p>A series is formed when the terms of a sequence
            are added together.</p>

            <h3>Arithmetic Progression (AP)</h3>

            <p>In an AP, the difference between consecutive terms
            is constant.</p>

            <p>
                T<sub>n</sub> = a + (n − 1)d
            </p>

            <p>
                S<sub>n</sub> = n/2 [2a + (n − 1)d]
            </p>

            <p>where a is the first term and d is the common difference.</p>

            <h3>Geometric Progression (GP)</h3>

            <p>In a GP, consecutive terms have a constant ratio.</p>

            <p>
                T<sub>n</sub> = ar<sup>n−1</sup>
            </p>
        `,

        examples: `
            <h3>Worked Examples</h3>

            <p><strong>Example 1:</strong> Find the 10th term of
            3, 7, 11, 15, ...</p>

            <p>
                a = 3, d = 4, n = 10
            </p>

            <p>
                T<sub>10</sub> = 3 + (10 − 1)4<br>
                = 39
            </p>

            <p><strong>Example 2:</strong> Find the sum of the first
            20 terms of 2, 5, 8, 11, ...</p>

            <p>
                a = 2, d = 3, n = 20
            </p>

            <p>
                S<sub>20</sub> = 20/2 [4 + 57]<br>
                = 610
            </p>

            <p><strong>Example 3:</strong> Find the 6th term of
            the GP 2, 6, 18, ...</p>

            <p>
                a = 2, r = 3
            </p>

            <p>
                T<sub>6</sub> = 2(3<sup>5</sup>)<br>
                = 486
            </p>
        `,

        practice: `
            <h3>Practice Questions</h3>
            <ol>
                <li>Find the 12th term of 5, 8, 11, 14, ...</li>
                <li>Find the 15th term of 2, 7, 12, 17, ...</li>
                <li>Find the sum of the first 10 terms of
                    4, 7, 10, ...</li>
                <li>Find the common difference of
                    21, 17, 13, 9, ...</li>
                <li>Find the 8th term of the GP
                    2, 6, 18, 54, ...</li>
            </ol>
        `,

        answers: `
            <h3>Answers</h3>
            <ol>
                <li>38</li>
                <li>72</li>
                <li>175</li>
                <li>−4</li>
                <li>4374</li>
            </ol>
        `
    },


    // ========================================================
    // TOPIC 6: QUADRATIC EQUATIONS
    // ========================================================

    6: {
        title: "Quadratic Equations",

        lesson: `
            <h2>Lesson: Quadratic Equations</h2>

            <p>A quadratic equation is an equation of the form:</p>

            <p><strong>ax² + bx + c = 0</strong>, where a ≠ 0.</p>

            <p>Quadratic equations can be solved by factorisation,
            completing the square, or the quadratic formula.</p>

            <p>The quadratic formula is:</p>

            <p>
                x = [−b ± √(b² − 4ac)] / 2a
            </p>

            <p>The expression b² − 4ac is called the discriminant.</p>
        `,

        examples: `
            <h3>Worked Examples</h3>

            <p><strong>Example 1:</strong> Solve
            x² − 5x + 6 = 0.</p>

            <p>
                (x − 2)(x − 3) = 0
            </p>

            <p>
                Therefore x = 2 or x = 3.
            </p>

            <p><strong>Example 2:</strong> Solve
            x² + 7x + 12 = 0.</p>

            <p>
                (x + 3)(x + 4) = 0
            </p>

            <p>
                x = −3 or x = −4.
            </p>

            <p><strong>Example 3:</strong> Solve
            2x² − 5x − 3 = 0.</p>

            <p>
                (2x + 1)(x − 3) = 0
            </p>

            <p>
                x = −1/2 or x = 3.
            </p>
        `,

        practice: `
            <h3>Practice Questions</h3>
            <ol>
                <li>Solve x² − 7x + 12 = 0.</li>
                <li>Solve x² + 5x + 6 = 0.</li>
                <li>Solve x² − 9 = 0.</li>
                <li>Solve 2x² − 7x + 3 = 0.</li>
                <li>Solve x² − 4x − 12 = 0.</li>
            </ol>
        `,

        answers: `
            <h3>Answers</h3>
            <ol>
                <li>x = 3 or 4</li>
                <li>x = −2 or −3</li>
                <li>x = 3 or −3</li>
                <li>x = 3 or 1/2</li>
                <li>x = 6 or −2</li>
            </ol>
        `
    },


    // ========================================================
    // TOPIC 7: SIMULTANEOUS EQUATIONS
    // ========================================================

    7: {
        title: "Simultaneous Equations",

        lesson: `
            <h2>Lesson: Simultaneous Equations</h2>

            <p>Simultaneous equations are two or more equations
            involving the same unknowns.</p>

            <p>Common methods include substitution and elimination.</p>

            <h3>Elimination Method</h3>
            <p>Coefficients are made equal and the equations are
            added or subtracted to eliminate one unknown.</p>

            <h3>Substitution Method</h3>
            <p>One equation is rearranged and substituted into
            the other equation.</p>
        `,

        examples: `
            <h3>Worked Examples</h3>

            <p><strong>Example 1:</strong> Solve:</p>
            <p>
                x + y = 9<br>
                x − y = 3
            </p>

            <p>
                Adding:<br>
                2x = 12<br>
                x = 6
            </p>

            <p>
                y = 9 − 6 = 3
            </p>

            <p><strong>Answer:</strong> x = 6, y = 3.</p>

            <p><strong>Example 2:</strong> Solve:</p>
            <p>
                2x + y = 11<br>
                x + y = 7
            </p>

            <p>
                Subtract the second equation from the first:
            </p>

            <p>
                x = 4
            </p>

            <p>
                4 + y = 7<br>
                y = 3
            </p>
        `,

        practice: `
            <h3>Practice Questions</h3>
            <ol>
                <li>Solve x + y = 10 and x − y = 4.</li>
                <li>Solve 2x + y = 13 and x + y = 8.</li>
                <li>Solve 3x + y = 14 and x + y = 6.</li>
                <li>Solve x + 2y = 11 and x − y = 2.</li>
                <li>Solve 2x + 3y = 16 and x + y = 6.</li>
            </ol>
        `,

        answers: `
            <h3>Answers</h3>
            <ol>
                <li>x = 7, y = 3</li>
                <li>x = 5, y = 3</li>
                <li>x = 4, y = 2</li>
                <li>x = 5, y = 3</li>
                <li>x = 2, y = 4</li>
            </ol>
        `
    },


    // ========================================================
    // TOPIC 8: MATRICES
    // ========================================================

    8: {
        title: "Matrices",

        lesson: `
            <h2>Lesson: Matrices</h2>

            <p>A matrix is a rectangular arrangement of numbers
            in rows and columns.</p>

            <p>The order of a matrix is written as:</p>

            <p><strong>number of rows × number of columns</strong></p>

            <p>For example, a matrix with 2 rows and 3 columns
            is a 2 × 3 matrix.</p>

            <h3>Matrix Operations</h3>
            <p>Matrices of the same order can be added or subtracted.</p>

            <p>For a 2 × 2 matrix:</p>

            <p>
                A = [ a b ; c d ]
            </p>

            <p>The determinant is:</p>

            <p><strong>|A| = ad − bc</strong></p>
        `,

        examples: `
            <h3>Worked Examples</h3>

            <p><strong>Example 1:</strong> Find the order of a matrix
            with 3 rows and 2 columns.</p>

            <p>Order = 3 × 2.</p>

            <p><strong>Example 2:</strong> If</p>

            <p>
                A = [2  3; 4  5]
            </p>

            <p>find |A|.</p>

            <p>
                |A| = (2 × 5) − (3 × 4)<br>
                = 10 − 12<br>
                = −2
            </p>

            <p><strong>Example 3:</strong> Add:</p>

            <p>
                [1  2] + [3  4]
            </p>

            <p>
                = [4  6]
            </p>
        `,

        practice: `
            <h3>Practice Questions</h3>
            <ol>
                <li>State the order of a matrix with 4 rows and 3 columns.</li>
                <li>Find the determinant of [2 1; 3 4].</li>
                <li>Find the determinant of [5 2; 1 3].</li>
                <li>Add [1 3; 2 4] and [2 1; 3 2].</li>
                <li>Subtract [1 2; 3 4] from [5 6; 7 8].</li>
            </ol>
        `,

        answers: `
            <h3>Answers</h3>
            <ol>
                <li>4 × 3</li>
                <li>5</li>
                <li>13</li>
                <li>[3 4; 5 6]</li>
                <li>[4 4; 4 4]</li>
            </ol>
        `
    },


    // ========================================================
    // TOPIC 9: BINOMIAL EXPANSION
    // ========================================================

    9: {
        title: "Binomial Expansion",

        lesson: `
            <h2>Lesson: Binomial Expansion</h2>

            <p>A binomial is an algebraic expression containing
            two terms.</p>

            <p>Examples are x + 2 and 3x − 5.</p>

            <p>The expansion of powers of a binomial can be obtained
            using Pascal's triangle or the binomial theorem.</p>

            <p>For example:</p>

            <p>
                (a + b)² = a² + 2ab + b²
            </p>

            <p>
                (a − b)² = a² − 2ab + b²
            </p>
        `,

        examples: `
            <h3>Worked Examples</h3>

            <p><strong>Example 1:</strong> Expand (x + 3)².</p>

            <p>
                = x² + 6x + 9
            </p>

            <p><strong>Example 2:</strong> Expand (x − 2)².</p>

            <p>
                = x² − 4x + 4
            </p>

            <p><strong>Example 3:</strong> Expand (x + 2)³.</p>

            <p>
                = x³ + 6x² + 12x + 8
            </p>
        `,

        practice: `
            <h3>Practice Questions</h3>
            <ol>
                <li>Expand (x + 4)².</li>
                <li>Expand (x − 5)².</li>
                <li>Expand (x + 3)³.</li>
                <li>Expand (2x + 1)².</li>
                <li>Expand (2x − 3)².</li>
            </ol>
        `,

        answers: `
            <h3>Answers</h3>
            <ol>
                <li>x² + 8x + 16</li>
                <li>x² − 10x + 25</li>
                <li>x³ + 9x² + 27x + 27</li>
                <li>4x² + 4x + 1</li>
                <li>4x² − 12x + 9</li>
            </ol>
        `
    },


    // ========================================================
    // TOPIC 10: FACTORIZATION
    // ========================================================

    10: {
        title: "Factorization",

        lesson: `
            <h2>Lesson: Factorization</h2>

            <p>Factorization is the process of expressing an
            algebraic expression as a product of simpler factors.</p>

            <h3>Common Factor</h3>
            <p>Look for a factor common to every term.</p>

            <p>For example:</p>
            <p>6x + 9 = 3(2x + 3)</p>

            <h3>Quadratic Factorization</h3>
            <p>For x² + bx + c, find two numbers whose product is c
            and whose sum is b.</p>
        `,

        examples: `
            <h3>Worked Examples</h3>

            <p><strong>Example 1:</strong> Factorize 8x + 12.</p>

            <p>
                Common factor = 4<br>
                8x + 12 = 4(2x + 3)
            </p>

            <p><strong>Example 2:</strong> Factorize
            x² + 7x + 12.</p>

            <p>
                Numbers are 3 and 4.
            </p>

            <p>
                x² + 7x + 12 = (x + 3)(x + 4)
            </p>

            <p><strong>Example 3:</strong> Factorize
            x² − 9.</p>

            <p>
                x² − 3² = (x − 3)(x + 3)
            </p>
        `,

        practice: `
            <h3>Practice Questions</h3>
            <ol>
                <li>Factorize 6x + 18.</li>
                <li>Factorize x² + 8x + 15.</li>
                <li>Factorize x² − 16.</li>
                <li>Factorize x² − 5x + 6.</li>
                <li>Factorize 3x² + 6x.</li>
            </ol>
        `,

        answers: `
            <h3>Answers</h3>
            <ol>
                <li>6(x + 3)</li>
                <li>(x + 3)(x + 5)</li>
                <li>(x − 4)(x + 4)</li>
                <li>(x − 2)(x − 3)</li>
                <li>3x(x + 2)</li>
            </ol>
        `
    },


    // ========================================================
    // TOPIC 11: LINEAR INEQUALITIES
    // ========================================================

    11: {
        title: "Linear Inequalities",

        lesson: `
            <h2>Lesson: Linear Inequalities</h2>

            <p>An inequality compares two quantities using symbols
            such as &lt;, &gt;, ≤ and ≥.</p>

            <p>Examples include:</p>

            <p>x &gt; 4, x ≤ 7 and 2x + 3 ≥ 9.</p>

            <p>When multiplying or dividing an inequality by a
            negative number, the inequality sign must be reversed.</p>
        `,

        examples: `
            <h3>Worked Examples</h3>

            <p><strong>Example 1:</strong> Solve x + 5 &gt; 9.</p>

            <p>
                x &gt; 9 − 5<br>
                x &gt; 4
            </p>

            <p><strong>Example 2:</strong> Solve 3x ≤ 15.</p>

            <p>
                x ≤ 5
            </p>

            <p><strong>Example 3:</strong> Solve −2x &gt; 8.</p>

            <p>
                Divide by −2 and reverse the sign:
            </p>

            <p>
                x &lt; −4
            </p>
        `,

        practice: `
            <h3>Practice Questions</h3>
            <ol>
                <li>Solve x + 4 &gt; 10.</li>
                <li>Solve 2x ≤ 14.</li>
                <li>Solve 3x − 2 ≥ 10.</li>
                <li>Solve −4x &gt; 20.</li>
                <li>Solve 5x + 3 &lt; 18.</li>
            </ol>
        `,

        answers: `
            <h3>Answers</h3>
            <ol>
                <li>x &gt; 6</li>
                <li>x ≤ 7</li>
                <li>x ≥ 4</li>
                <li>x &lt; −5</li>
                <li>x &lt; 3</li>
            </ol>
        `
    },


    // ========================================================
    // TOPIC 12: CHANGE OF SUBJECT OF FORMULA
    // ========================================================

    12: {
        title: "Change of Subject of Formula",

        lesson: `
            <h2>Lesson: Change of Subject of Formula</h2>

            <p>Changing the subject of a formula means rearranging
            an equation so that a different variable is alone on
            one side.</p>

            <p>The same mathematical operation must be applied
            correctly to both sides.</p>

            <h3>Useful Operations</h3>
            <ul>
                <li>Addition and subtraction</li>
                <li>Multiplication and division</li>
                <li>Squaring and taking square roots</li>
            </ul>
        `,

        examples: `
            <h3>Worked Examples</h3>

            <p><strong>Example 1:</strong> Make x the subject of
            y = 3x + 5.</p>

            <p>
                y − 5 = 3x<br>
                x = (y − 5)/3
            </p>

            <p><strong>Example 2:</strong> Make r the subject of
            A = πr².</p>

            <p>
                r² = A/π<br>
                r = √(A/π)
            </p>

            <p><strong>Example 3:</strong> Make t the subject of
            v = u + at.</p>

            <p>
                v − u = at<br>
                t = (v − u)/a
            </p>
        `,

        practice: `
            <h3>Practice Questions</h3>
            <ol>
                <li>Make x the subject of y = 4x + 7.</li>
                <li>Make a the subject of v = u + at.</li>
                <li>Make r the subject of C = 2πr.</li>
                <li>Make h the subject of A = 1/2bh.</li>
                <li>Make x the subject of y = (x + 3)/5.</li>
            </ol>
        `,

        answers: `
            <h3>Answers</h3>
            <ol>
                <li>x = (y − 7)/4</li>
                <li>a = (v − u)/t</li>
                <li>r = C/(2π)</li>
                <li>h = 2A/b</li>
                <li>x = 5y − 3</li>
            </ol>
        `
    },


    // ========================================================
    // TOPIC 13: MODULAR ARITHMETIC
    // ========================================================

    13: {
        title: "Modular Arithmetic",

        lesson: `
            <h2>Lesson: Modular Arithmetic</h2>

            <p>Modular arithmetic deals with remainders after
            division.</p>

            <p>The notation:</p>

            <p><strong>a mod n</strong></p>

            <p>means the remainder when a is divided by n.</p>

            <p>For example:</p>

            <p>
                17 mod 5 = 2
            </p>

            <p>because 17 = 5 × 3 + 2.</p>

            <p>Congruence can be written as:</p>

            <p>
                a ≡ b (mod n)
            </p>
        `,

        examples: `
            <h3>Worked Examples</h3>

            <p><strong>Example 1:</strong> Find 23 mod 5.</p>

            <p>
                23 = 5 × 4 + 3
            </p>

            <p>
                Therefore 23 mod 5 = 3.
            </p>

            <p><strong>Example 2:</strong> Find 38 mod 7.</p>

            <p>
                38 = 7 × 5 + 3
            </p>

            <p>
                Answer = 3.
            </p>

            <p><strong>Example 3:</strong> Determine whether
            29 ≡ 5 (mod 12).</p>

            <p>
                29 − 5 = 24.
            </p>

            <p>Since 24 is divisible by 12:</p>

            <p>
                29 ≡ 5 (mod 12).
            </p>
        `,

        practice: `
            <h3>Practice Questions</h3>
            <ol>
                <li>Find 19 mod 4.</li>
                <li>Find 35 mod 6.</li>
                <li>Find 52 mod 9.</li>
                <li>Determine whether 17 ≡ 5 (mod 6).</li>
                <li>Find the remainder when 100 is divided by 7.</li>
            </ol>
        `,

        answers: `
            <h3>Answers</h3>
            <ol>
                <li>3</li>
                <li>5</li>
                <li>7</li>
                <li>False</li>
                <li>2</li>
            </ol>
        `
    },


    // ========================================================
    // TOPIC 14: PERMUTATION
    // ========================================================

    14: {
        title: "Permutation",

        lesson: `
            <h2>Lesson: Permutation</h2>

            <p>A permutation is an arrangement of objects in which
            the order is important.</p>

            <p>The number of arrangements of n different objects is:</p>

            <p><strong>n! = n(n − 1)(n − 2)...1</strong></p>

            <p>For arrangements of r objects selected from n objects:</p>

            <p>
                <strong>nP<sub>r</sub> =
                n!/(n − r)!</strong>
            </p>
        `,

        examples: `
            <h3>Worked Examples</h3>

            <p><strong>Example 1:</strong> Find 5!.</p>

            <p>
                5! = 5 × 4 × 3 × 2 × 1 = 120
            </p>

            <p><strong>Example 2:</strong> Find 5P2.</p>

            <p>
                5P2 = 5!/(5−2)!<br>
                = 5!/3!<br>
                = 5 × 4<br>
                = 20
            </p>

            <p><strong>Example 3:</strong> In how many ways can
            4 different books be arranged?</p>

            <p>
                4! = 24
            </p>
        `,

        practice: `
            <h3>Practice Questions</h3>
            <ol>
                <li>Evaluate 6!.</li>
                <li>Evaluate 7P2.</li>
                <li>Evaluate 6P3.</li>
                <li>In how many ways can 5 students stand in a row?</li>
                <li>Find 8P3.</li>
            </ol>
        `,

        answers: `
            <h3>Answers</h3>
            <ol>
                <li>720</li>
                <li>42</li>
                <li>120</li>
                <li>120</li>
                <li>336</li>
            </ol>
        `
    },


    // ========================================================
    // TOPIC 15: COMBINATION
    // ========================================================

    15: {
        title: "Combination",

        lesson: `
            <h2>Lesson: Combination</h2>

            <p>A combination is a selection of objects where
            order does not matter.</p>

            <p>The formula is:</p>

            <p>
                <strong>nC<sub>r</sub> =
                n!/[r!(n−r)!]</strong>
            </p>

            <p>Unlike permutation, changing the order does not
            produce a new combination.</p>

            <h3>Example</h3>

            <p>Selecting A, B and C is the same combination as
            C, A and B.</p>
        `,

        examples: `
            <h3>Worked Examples</h3>

            <p><strong>Example 1:</strong> Find 5C2
