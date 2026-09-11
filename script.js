"use strict";

/*
============================================================
SSS 2 MATHEMATICS APP
45 TOPICS
BATCH 1: TOPICS 1 - 15

Every topic contains:
1. Detailed Lesson
2. Worked Examples
3. Practice Questions
4. Answers

BATCH 2 = TOPICS 16 - 30
BATCH 3 = TOPICS 31 - 45
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

            <p>
                A surd is an irrational number expressed in root form,
                such as √2, √3 and √5, which cannot be simplified to a
                rational number.
            </p>

            <p>
                The basic laws of surds include:
            </p>

            <ul>
                <li>√a × √b = √ab</li>
                <li>√a ÷ √b = √(a/b), where b ≠ 0</li>
                <li>(√a)² = a</li>
            </ul>

            <p>
                To simplify a surd, look for a perfect-square factor.
                For example:
            </p>

            <p>
                √72 = √(36 × 2) = 6√2
            </p>

            <p>
                Like surds can be added or subtracted. Unlike surds
                cannot be combined directly.
            </p>

            <h3>Rationalising the Denominator</h3>

            <p>
                A denominator containing a surd can be rationalised by
                multiplying the numerator and denominator by a suitable
                surd.
            </p>
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
                √8 = 2√2 and √18 = 3√2
            </p>
            <p>
                Therefore:<br>
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

            <p>
                A logarithm is another way of expressing an index.
            </p>

            <p>
                If aˣ = N, then:
            </p>

            <p>
                logₐN = x
            </p>

            <p>
                For example, since 2³ = 8:
            </p>

            <p>
                log₂8 = 3
            </p>

            <h3>Laws of Logarithms</h3>

            <ul>
                <li>logₐ(MN) = logₐM + logₐN</li>
                <li>logₐ(M/N) = logₐM − logₐN</li>
                <li>logₐ(Mⁿ) = n logₐM</li>
            </ul>

            <p>
                The base of a logarithm must be positive and must not
                equal 1.
            </p>
        `,

        examples: `
            <h3>Worked Examples</h3>

            <p><strong>Example 1:</strong> Evaluate log₂32.</p>
            <p>
                Since 2⁵ = 32,
            </p>
            <p>
                log₂32 = 5.
            </p>

            <p><strong>Example 2:</strong> Simplify log₃9 + log₃27.</p>
            <p>
                log₃9 = 2<br>
                log₃27 = 3
            </p>
            <p>
                Therefore the answer is 5.
            </p>

            <p><strong>Example 3:</strong> Solve log₂x = 6.</p>
            <p>
                Convert to index form:
            </p>
            <p>
                x = 2⁶ = 64.
            </p>
        `,

        practice: `
            <h3>Practice Questions</h3>

            <ol>
                <li>Evaluate log₂16.</li>
                <li>Evaluate log₅125.</li>
                <li>Simplify log₃27 + log₃9.</li>
                <li>Solve log₂x = 7.</li>
                <li>Solve log₁₀x = 3.</li>
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

            <p>
                An index shows how many times a number is multiplied by
                itself.
            </p>

            <p>
                For example:
            </p>

            <p>
                2⁴ = 2 × 2 × 2 × 2 = 16
            </p>

            <h3>Laws of Indices</h3>

            <ul>
                <li>aᵐ × aⁿ = aᵐ⁺ⁿ</li>
                <li>aᵐ ÷ aⁿ = aᵐ⁻ⁿ</li>
                <li>(aᵐ)ⁿ = aᵐⁿ</li>
                <li>a⁰ = 1, for a ≠ 0</li>
                <li>a⁻ⁿ = 1/aⁿ</li>
            </ul>

            <p>
                Fractional indices are related to roots:
            </p>

            <p>
                a¹ᐟ² = √a
            </p>
        `,

        examples: `
            <h3>Worked Examples</h3>

            <p><strong>Example 1:</strong> Simplify 2³ × 2⁵.</p>
            <p>
                2³ × 2⁵ = 2⁸ = 256.
            </p>

            <p><strong>Example 2:</strong> Simplify x⁷ ÷ x³.</p>
            <p>
                x⁷ ÷ x³ = x⁴.
            </p>

            <p><strong>Example 3:</strong> Simplify 16¹ᐟ².</p>
            <p>
                16¹ᐟ² = √16 = 4.
            </p>
        `,

        practice: `
            <h3>Practice Questions</h3>

            <ol>
                <li>Simplify 3² × 3⁴.</li>
                <li>Simplify 5⁷ ÷ 5³.</li>
                <li>Simplify x⁶ × x².</li>
                <li>Evaluate 81¹ᐟ².</li>
                <li>Simplify 2⁻³.</li>
            </ol>
        `,

        answers: `
            <h3>Answers</h3>

            <ol>
                <li>729</li>
                <li>625</li>
                <li>x⁸</li>
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

            <p>
                Variation describes how one quantity changes in relation
                to another quantity.
            </p>

            <h3>Direct Variation</h3>

            <p>
                If y varies directly as x, then:
            </p>

            <p>
                y = kx
            </p>

            <p>
                where k is the constant of proportionality.
            </p>

            <h3>Inverse Variation</h3>

            <p>
                If y varies inversely as x, then:
            </p>

            <p>
                y = k/x
            </p>

            <p>
                or xy = k.
            </p>

            <h3>Joint Variation</h3>

            <p>
                If y varies directly as x and z, then:
            </p>

            <p>
                y = kxz.
            </p>
        `,

        examples: `
            <h3>Worked Examples</h3>

            <p>
                <strong>Example 1:</strong> y varies directly as x.
                If y = 12 when x = 4, find y when x = 10.
            </p>

            <p>
                y = kx<br>
                12 = 4k<br>
                k = 3
            </p>

            <p>
                Therefore y = 3x.
            </p>

            <p>
                When x = 10:
            </p>

            <p>
                y = 3 × 10 = 30.
            </p>

            <p>
                <strong>Example 2:</strong> y varies inversely as x.
                If y = 8 when x = 3, find y when x = 12.
            </p>

            <p>
                xy = k<br>
                8 × 3 = 24
            </p>

            <p>
                Therefore:
                y = 24/12 = 2.
            </p>
        `,

        practice: `
            <h3>Practice Questions</h3>

            <ol>
                <li>y varies directly as x. If y = 15 when x = 5, find y when x = 12.</li>
                <li>y varies inversely as x. If y = 6 when x = 4, find y when x = 8.</li>
                <li>If y = kx and y = 28 when x = 7, find k.</li>
                <li>p varies directly as q. If p = 18 when q = 6, find p when q = 15.</li>
                <li>State the equation for inverse variation between y and x.</li>
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

            <p>
                A sequence is an ordered list of numbers following a
                particular pattern.
            </p>

            <p>
                A series is obtained when the terms of a sequence are
                added together.
            </p>

            <h3>Arithmetic Progression</h3>

            <p>
                In an arithmetic progression (AP), the difference between
                consecutive terms is constant.
            </p>

            <p>
                The nth term is:
            </p>

            <p>
                Tₙ = a + (n − 1)d
            </p>

            <p>
                where a is the first term and d is the common difference.
            </p>

            <p>
                The sum of n terms is:
            </p>

            <p>
                Sₙ = n/2 [2a + (n − 1)d]
            </p>

            <h3>Geometric Progression</h3>

            <p>
                In a geometric progression, consecutive terms have a
                constant ratio.
            </p>

            <p>
                Tₙ = arⁿ⁻¹
            </p>
        `,

        examples: `
            <h3>Worked Examples</h3>

            <p>
                <strong>Example 1:</strong> Find the 10th term of
                3, 7, 11, 15, ...
            </p>

            <p>
                a = 3, d = 4, n = 10
            </p>

            <p>
                T₁₀ = 3 + (10 − 1)4<br>
                = 3 + 36<br>
                = 39.
            </p>

            <p>
                <strong>Example 2:</strong> Find the sum of the first
                20 terms of 2, 5, 8, 11, ...
            </p>

            <p>
                a = 2, d = 3, n = 20
            </p>

            <p>
                S₂₀ = 20/2 [2(2) + 19(3)]<br>
                = 10[4 + 57]<br>
                = 610.
            </p>
        `,

        practice: `
            <h3>Practice Questions</h3>

            <ol>
                <li>Find the 12th term of 5, 8, 11, 14, ...</li>
                <li>Find the 15th term of 2, 7, 12, 17, ...</li>
                <li>Find the sum of the first 10 terms of 4, 7, 10, ...</li>
                <li>Find the common difference of 21, 17, 13, 9, ...</li>
                <li>Find the 8th term of the GP 2, 6, 18, 54, ...</li>
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

            <p>
                A quadratic equation is an equation of the form:
            </p>

            <p>
                ax² + bx + c = 0, where a ≠ 0.
            </p>

            <p>
                Quadratic equations can be solved by factorisation,
                completing the square, or the quadratic formula.
            </p>

            <p>
                The quadratic formula is:
            </p>

            <p>
                x = [−b ± √(b² − 4ac)] / 2a
            </p>

            <p>
                The expression b² − 4ac is called the discriminant.
            </p>
        `,

        examples: `
            <h3>Worked Examples</h3>

            <p><strong>Example 1:</strong> Solve x² − 5x + 6 = 0.</p>

            <p>
                Factorise:
            </p>

            <p>
                (x − 2)(x − 3) = 0
            </p>

            <p>
                Therefore:
            </p>

            <p>
                x = 2 or x = 3.
            </p>

            <p>
                <strong>Example 2:</strong> Solve x² + 4x − 12 = 0.
            </p>

            <p>
                (x + 6)(x − 2) = 0
            </p>

            <p>
                Therefore:
                x = −6 or x = 2.
            </p>
        `,

        practice: `
            <h3>Practice Questions</h3>

            <ol>
                <li>Solve x² − 7x + 12 = 0.</li>
                <li>Solve x² − 9x + 20 = 0.</li>
                <li>Solve x² + x − 6 = 0.</li>
                <li>Solve x² − 16 = 0.</li>
                <li>Solve 2x² − 5x − 3 = 0.</li>
            </ol>
        `,

        answers: `
            <h3>Answers</h3>

            <ol>
                <li>x = 3 or 4</li>
                <li>x = 4 or 5</li>
                <li>x = 2 or −3</li>
                <li>x = 4 or −4</li>
                <li>x = 3 or −1/2</li>
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

            <p>
                Simultaneous equations are two or more equations
                involving two or more unknowns that must be satisfied
                at the same time.
            </p>

            <p>
                Common methods include:
            </p>

            <ul>
                <li>Substitution</li>
                <li>Elimination</li>
                <li>Graphical method</li>
            </ul>
        `,

        examples: `
            <h3>Worked Example</h3>

            <p>Solve:</p>

            <p>
                x + y = 10<br>
                x − y = 2
            </p>

            <p>
                Add the equations:
            </p>

            <p>
                2x = 12
            </p>

            <p>
                x = 6
            </p>

            <p>
                Substitute into x + y = 10:
            </p>

            <p>
                6 + y = 10
            </p>

            <p>
                y = 4.
            </p>

            <p>
                Therefore x = 6 and y = 4.
            </p>
        `,

        practice: `
            <h3>Practice Questions</h3>

            <ol>
                <li>x + y = 14 and x − y = 4. Find x and y.</li>
                <li>2x + y = 11 and x + y = 7. Find x and y.</li>
                <li>3x + y = 13 and x + y = 7. Find x and y.</li>
                <li>x + 2y = 11 and x − y = 2. Find x and y.</li>
                <li>2x + 3y = 13 and x + y = 5. Find x and y.</li>
            </ol>
        `,

        answers: `
            <h3>Answers</h3>

            <ol>
                <li>x = 9, y = 5</li>
                <li>x = 4, y = 3</li>
                <li>x = 3, y = 4</li>
                <li>x = 5, y = 3</li>
                <li>x = 2, y = 3</li>
            </ol>
        `
    },


    // ========================================================
    // TOPIC 8: CHANGE OF SUBJECT OF FORMULA
    // ========================================================

    8: {
        title: "Change of Subject of Formula",

        lesson: `
            <h2>Lesson: Change of Subject of Formula</h2>

            <p>
                Changing the subject of a formula means rearranging an
                equation so that a different variable appears alone on
                one side.
            </p>

            <p>
                The same algebraic operation must be applied correctly
                to both sides of an equation.
            </p>
        `,

        examples: `
            <h3>Worked Examples</h3>

            <p>
                <strong>Example 1:</strong> Make x the subject of
                y = 3x + 5.
            </p>

            <p>
                y − 5 = 3x
            </p>

            <p>
                x = (y − 5)/3.
            </p>

            <p>
                <strong>Example 2:</strong> Make r the subject of
                A = πr².
            </p>

            <p>
                r² = A/π
            </p>

            <p>
                r = √(A/π).
            </p>

            <p>
                <strong>Example 3:</strong> Make x the subject of
                y = (x + 4)/3.
            </p>

            <p>
                3y = x + 4
            </p>

            <p>
                x = 3y − 4.
            </p>
        `,

        practice: `
            <h3>Practice Questions</h3>

            <ol>
                <li>Make x the subject of y = 5x + 2.</li>
                <li>Make r the subject of C = 2πr.</li>
                <li>Make h the subject of A = 1/2bh.</li>
                <li>Make x the subject of y = (x − 3)/4.</li>
                <li>Make v the subject of s = vt.</li>
            </ol>
        `,

        answers: `
            <h3>Answers</h3>

            <ol>
                <li>x = (y − 2)/5</li>
                <li>r = C/(2π)</li>
                <li>h = 2A/b</li>
                <li>x = 4y + 3</li>
                <li>v = s/t</li>
            </ol>
        `
    },


    // ========================================================
    // TOPIC 9: ALGEBRAIC FRACTIONS
    // ========================================================

    9: {
        title: "Algebraic Fractions",

        lesson: `
            <h2>Lesson: Algebraic Fractions</h2>

            <p>
                Algebraic fractions are fractions containing algebraic
                expressions.
            </p>

            <p>
                To simplify an algebraic fraction, factorise the
                numerator and denominator and cancel common factors.
            </p>

            <p>
                When adding or subtracting algebraic fractions, first
                find a common denominator.
            </p>
        `,

        examples: `
            <h3>Worked Examples</h3>

            <p>
                <strong>Example 1:</strong> Simplify
                (x² − 9)/(x + 3).
            </p>

            <p>
                x² − 9 = (x − 3)(x + 3)
            </p>

            <p>
                Therefore:
            </p>

            <p>
                [(x − 3)(x + 3)]/(x + 3) = x − 3.
            </p>

            <p>
                <strong>Example 2:</strong> Simplify
                2/x + 3/x.
            </p>

            <p>
                = 5/x.
            </p>
        `,

        practice: `
            <h3>Practice Questions</h3>

            <ol>
                <li>Simplify (x² − 16)/(x + 4).</li>
                <li>Simplify 3/x + 5/x.</li>
                <li>Simplify 7/x − 2/x.</li>
                <li>Simplify (x² − 25)/(x − 5).</li>
                <li>Simplify 1/x + 1/y.</li>
            </ol>
        `,

        answers: `
            <h3>Answers</h3>

            <ol>
                <li>x − 4</li>
                <li>8/x</li>
                <li>5/x</li>
                <li>x + 5</li>
                <li>(x + y)/xy</li>
            </ol>
        `
    },


    // ========================================================
    // TOPIC 10: BINOMIAL EXPANSION
    // ========================================================

    10: {
        title: "Binomial Expansion",

        lesson: `
            <h2>Lesson: Binomial Expansion</h2>

            <p>
                A binomial is an algebraic expression containing two
                terms, such as (x + 2).
            </p>

            <p>
                Common expansions include:
            </p>

            <p>
                (a + b)² = a² + 2ab + b²
            </p>

            <p>
                (a − b)² = a² − 2ab + b²
            </p>

            <p>
                (a + b)(a − b) = a² − b²
            </p>

            <p>
                The binomial theorem can be used to expand expressions
                raised to higher powers.
            </p>
        `,

        examples: `
            <h3>Worked Examples</h3>

            <p>
                <strong>Example 1:</strong> Expand (x + 3)².
            </p>

            <p>
                (x + 3)² = x² + 6x + 9.
            </p>

            <p>
                <strong>Example 2:</strong> Expand (2x − 5)².
            </p>

            <p>
                = (2x)² − 2(2x)(5) + 5²
            </p>

            <p>
                = 4x² − 20x + 25.
            </p>

            <p>
                <strong>Example 3:</strong> Expand (x + 2)(x − 2).
            </p>

            <p>
                = x² − 4.
            </p>
        `,

        practice: `
            <h3>Practice Questions</h3>

            <ol>
                <li>Expand (x + 5)².</li>
                <li>Expand (x − 4)².</li>
                <li>Expand (2x + 3)².</li>
                <li>Expand (3x − 2)².</li>
                <li>Expand (x + 7)(x − 7).</li>
            </ol>
        `,

        answers: `
            <h3>Answers</h3>

            <ol>
                <li>x² + 10x + 25</li>
                <li>x² − 8x + 16</li>
                <li>4x² + 12x + 9</li>
                <li>9x² − 12x + 4</li>
                <li>x² − 49</li>
            </ol>
        `
    },


    // ========================================================
    // TOPIC 11: PERMUTATION
    // ========================================================

    11: {
        title: "Permutation",

        lesson: `
            <h2>Lesson: Permutation</h2>

            <p>
                A permutation is an arrangement of objects where order
                matters.
            </p>

            <p>
                The number of arrangements of n different objects is:
            </p>

            <p>
                n! = n(n − 1)(n − 2) ... 1
            </p>

            <p>
                The number of ways of arranging r objects selected from
                n objects is:
            </p>

            <p>
                nPr = n!/(n − r)!
            </p>

            <p>
                For example:
                5P2 = 5!/(5 − 2)! = 20.
            </p>
        `,

        examples: `
            <h3>Worked Examples</h3>

            <p>
                <strong>Example 1:</strong> Find 5!.
            </p>

            <p>
                5! = 5 × 4 × 3 × 2 × 1 = 120.
            </p>

            <p>
                <strong>Example 2:</strong> Find 6P2.
            </p>

            <p>
                6P2 = 6 × 5 = 30.
            </p>

            <p>
                <strong>Example 3:</strong> How many ways can 4
                students be arranged in a row?
            </p>

            <p>
                4! = 24.
            </p>
        `,

        practice: `
            <h3>Practice Questions</h3>

            <ol>
                <li>Evaluate 6!.</li>
                <li>Evaluate 7P2.</li>
                <li>Evaluate 8P3.</li>
                <li>How many ways can 5 people sit in a row?</li>
                <li>Evaluate 5P3.</li>
            </ol>
        `,

        answers: `
            <h3>Answers</h3>

            <ol>
                <li>720</li>
                <li>42</li>
                <li>336</li>
                <li>120</li>
                <li>60</li>
            </ol>
        `
    },


    // ========================================================
    // TOPIC 12: COMBINATION
    // ========================================================

    12: {
        title: "Combination",

        lesson: `
            <h2>Lesson: Combination</h2>

            <p>
                A combination is a selection of objects where order does
                not matter.
            </p>

            <p>
                The formula is:
            </p>

            <p>
                nCr = n!/[r!(n − r)!]
            </p>

            <p>
                Unlike permutation, selecting A and B is the same as
                selecting B and A.
            </p>
        `,

        examples: `
            <h3>Worked Examples</h3>

            <p>
                <strong>Example 1:</strong> Find 5C2.
            </p>

            <p>
                5C2 = 5!/(2!3!)
            </p>

            <p>
                = 10.
            </p>

            <p>
                <strong>Example 2:</strong> From 6 students, how many
                different committees of 3 can be formed?
            </p>

            <p>
                6C3 = 20.
            </p>
        `,

        practice: `
            <h3>Practice Questions</h3>

            <ol>
                <li>Evaluate 6C2.</li>
                <li>Evaluate 7C3.</li>
                <li>Evaluate 8C2.</li>
                <li>How many committees of 4 can be selected from 7 people?</li>
                <li>Evaluate 10C3.</li>
            </ol>
        `,

        answers: `
            <h3>Answers</h3>

            <ol>
                <li>15</li>
                <li>35</li>
                <li>28</li>
                <li>35</li>
                <li>120</li>
            </ol>
        `
    },


    // ========================================================
    // TOPIC 13: PROBABILITY
    // ========================================================

    13: {
        title: "Probability",

        lesson: `
            <h2>Lesson: Probability</h2>

            <p>
                Probability measures how likely an event is to occur.
            </p>

            <p>
                For equally likely outcomes:
            </p>

            <p>
                P(E) = Number of favourable outcomes /
                Total number of possible outcomes
            </p>

            <p>
                Probability lies between 0 and 1.
            </p>

            <p>
                An impossible event has probability 0, while a certain
                event has probability 1.
            </p>

            <p>
                The probability of the complement of E is:
            </p>

            <p>
                P(E') = 1 − P(E).
            </p>
        `,

        examples: `
            <h3>Worked Examples</h3>

            <p>
                <strong>Example 1:</strong> A fair die is thrown.
                Find the probability of obtaining a 4.
            </p>

            <p>
                There is one favourable outcome and six possible
                outcomes.
            </p>

            <p>
                P(4) = 1/6.
            </p>

            <p>
                <strong>Example 2:</strong> A bag contains 3 red balls
                and 2 blue balls. Find the probability of selecting a
                red ball.
            </p>

            <p>
                Total balls = 5<br>
                Red balls = 3
            </p>

            <p>
                P(red) = 3/5.
            </p>
        `,

        practice: `
            <h3>Practice Questions</h3>

            <ol>
                <li>A fair die is thrown. Find P(6).</li>
                <li>A coin is tossed. Find P(head).</li>
                <li>A bag contains 4 red and 6 blue balls. Find P(red).</li>
                <li>If P(A) = 0.3, find P(A').</li>
                <li>A card is selected from cards numbered 1 to 10. Find the probability of selecting an even number.</li>
            </ol>
        `,

        answers: `
            <h3>Answers</h3>

            <ol>
                <li>1/6</li>
                <li>1/2</li>
                <li>2/5</li>
                <li>0.7</li>
                <li>1/2</li>
            </ol>
        `
    },


    // ========================================================
    // TOPIC 14: MATRICES
    // ========================================================

    14: {
        title: "Matrices",

        lesson: `
            <h2>Lesson: Matrices</h2>

            <p>
                A matrix is a rectangular arrangement of numbers or
                algebraic expressions in rows and columns.
            </p>

            <p>
                A matrix with 2 rows and 3 columns has order 2 × 3.
            </p>

            <h3>Matrix Addition</h3>

            <p>
                Matrices can be added only when they have the same order.
                Corresponding elements are added.
            </p>

            <h3>Scalar Multiplication</h3>

            <p>
                Every element of a matrix is multiplied by the scalar.
            </p>

            <h3>Determinant of a 2 × 2 Matrix</h3>

            <p>
                For:
            </p>

            <p>
                A = [a b; c d]
            </p>

            <p>
                det(A) = ad − bc.
            </p>
        `,

        examples: `
            <h3>Worked Examples</h3>

            <p>
                <strong>Example 1:</strong>
                Add:
            </p>

            <p>
                A = [1 2; 3 4]<br>
                B = [5 6; 7 8]
            </p>

            <p>
                A + B = [6 8; 10 12].
            </p>

            <p>
                <strong>Example 2:</strong> Find the determinant of
                [2 3; 4 5].
            </p>

            <p>
                det(A) = (2 × 5) − (3 × 4)
            </p>

            <p>
                = 10 − 12 = −2.
            </p>
        `,

        practice: `
            <h3>Practice Questions</h3>

            <ol>
                <li>Find the order of [1 2 3; 4 5 6].</li>
                <li>Add [2 1; 3 4] and [5 2; 1 3].</li>
                <li>Find the determinant of [3 2; 1 4].</li>
                <li>Multiply [1 2; 3 4] by 3.</li>
                <li>Find the determinant of [5 1; 2 3].</li>
            </ol>
        `,

        answers: `
            <h3>Answers</h3>

            <ol>
                <li>2 × 3</li>
                <li>[7 3; 4 7]</li>
                <li>10</li>
                <li>[3 6; 9 12]</li>
                <li>13</li>
            </ol>
        `
    },


    // ========================================================
    // TOPIC 15: COORDINATE GEOMETRY
    // ========================================================

    15: {
        title: "Coordinate Geometry",

        lesson: `
            <h2>Lesson: Coordinate Geometry</h2>

            <p>
                Coordinate geometry uses algebra to study points,
                lines and shapes on the Cartesian plane.
            </p>

            <h3>Gradient</h3>

            <p>
                For points (x₁, y₁) and (x₂, y₂):
            </p>

            <p>
                m = (y₂ − y₁)/(x₂ − x₁)
            </p>

            <h3>Equation of a Straight Line</h3>

            <p>
                The equation can be written as:
            </p>

            <p>
                y = mx + c
            </p>

            <p>
                where m is the gradient and c is the y-intercept.
            </p>

            <h3>Distance Between Two Points</h3>

            <p>
                Distance =
                √[(x₂ − x₁)² + (y₂ − y₁)²]
            </p>

            <h3>Midpoint</h3>

            <p>
                Midpoint =
                ((x₁ + x₂)/2, (y₁ + y₂)/2)
            </p>
        `,

        examples: `
            <h3>Worked Examples</h3>

            <p>
                <strong>Example 1:</strong> Find the gradient of the
                line joining (2, 3) and (6, 11).
            </p>

            <p>
                m = (11 − 3)/(6 − 2)
            </p>

            <p>
                = 8/4 = 2.
            </p>

            <p>
                <strong>Example 2:</strong> Find the midpoint of
                (2, 4) and (8, 10).
            </p>

            <p>
                Midpoint =
                ((2 + 8)/2, (4 + 10)/2)
            </p>

            <p>
                = (5, 7).
            </p>

            <p>
                <strong>Example 3:</strong> Find the distance between
                (1, 2) and (4, 6).
            </p>

            <p>
                Distance =
                √[(4 − 1)² + (6 − 2)²]
            </p>

            <p>
                = √(9 + 16)
                = √25
                = 5.
            </p>
        `,

        practice: `
            <h3>Practice Questions</h3>

            <ol>
                <li>Find the gradient joining (1, 2) and (5, 10).</li>
                <li>Find the midpoint of (2, 6) and (8, 12).</li>
                <li>Find the distance between (0, 0) and (3, 4).</li>
                <li>Find the gradient of y = 4x + 7.</li>
                <li>Find the y-intercept of y = 3x − 5.</li>
            </ol>
        `,

        answers: `
            <h3>Answers</h3>

            <ol>
                <li>2</li>
                <li>(5, 9)</li>
                <li>5</li>
                <li>4</li>
                <li>−5</li>
            </ol>
        `
    }

};


/*
============================================================
TOPIC DISPLAY FUNCTION
============================================================
*/

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
            <h2>SSS 2 Mathematics</h2>
            <p>Please select a topic.</p>
        `;
        return;
    }

    lesson.innerHTML = `
        <article class="topic-content">

            <h1>${topic.title}</h1>

            <div class="lesson-section">
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


/*
============================================================
INITIAL DISPLAY
============================================================
*/

document.addEventListener("DOMContentLoaded", function () {

    const select = document.getElementById("topicSelect");

    if (select) {

        if (select.value) {
            showTopic();
        }

        select.addEventListener("change", showTopic);
    }

});// ============================================================
// BATCH 2: TOPICS 16 - 30
// ============================================================

// ============================================================
// TOPIC 16: MENSURATION
// ============================================================

16: {
    title: "Mensuration",

    lesson: `
        <h2>Lesson: Mensuration</h2>
        <p>Mensuration is the study of measurement of lengths, areas and volumes of geometric shapes.</p>

        <h3>Important Formulae</h3>
        <ul>
            <li>Rectangle: Area = length × breadth</li>
            <li>Square: Area = side²</li>
            <li>Triangle: Area = ½ × base × height</li>
            <li>Parallelogram: Area = base × height</li>
            <li>Trapezium: Area = ½(a + b)h</li>
            <li>Circle: Area = πr²</li>
            <li>Circle circumference = 2πr</li>
        </ul>

        <p>Use π = 22/7 or 3.142 where appropriate. Always use the same units throughout a calculation.</p>
    `,

    examples: `
        <h2>Worked Examples</h2>

        <p><strong>Example 1:</strong> Find the area of a rectangle of length 12 cm and breadth 7 cm.</p>
        <p>Area = 12 × 7 = <strong>84 cm²</strong>.</p>

        <p><strong>Example 2:</strong> Find the area of a triangle with base 10 cm and height 8 cm.</p>
        <p>Area = ½ × 10 × 8 = <strong>40 cm²</strong>.</p>

        <p><strong>Example 3:</strong> Find the circumference of a circle of radius 7 cm.</p>
        <p>Circumference = 2 × 22/7 × 7 = <strong>44 cm</strong>.</p>
    `,

    practice: `
        <h2>Practice Questions</h2>
        <ol>
            <li>Find the area of a square of side 9 cm.</li>
            <li>Find the area of a triangle with base 14 cm and height 6 cm.</li>
            <li>Find the circumference of a circle of radius 14 cm.</li>
            <li>Find the area of a circle of radius 7 cm.</li>
            <li>A rectangle is 15 m long and 8 m wide. Find its area.</li>
        </ol>
    `,

    answers: `
        <h2>Answers</h2>
        <ol>
            <li>81 cm²</li>
            <li>42 cm²</li>
            <li>88 cm</li>
            <li>154 cm²</li>
            <li>120 m²</li>
        </ol>
    `
},

// ============================================================
// TOPIC 17: TRIGONOMETRY
// ============================================================

17: {
    title: "Trigonometry",

    lesson: `
        <h2>Lesson: Trigonometry</h2>
        <p>Trigonometry deals with relationships between the sides and angles of triangles.</p>

        <h3>SOH-CAH-TOA</h3>
        <ul>
            <li>sin θ = Opposite / Hypotenuse</li>
            <li>cos θ = Adjacent / Hypotenuse</li>
            <li>tan θ = Opposite / Adjacent</li>
        </ul>

        <p>The hypotenuse is always opposite the right angle and is the longest side of a right-angled triangle.</p>
    `,

    examples: `
        <h2>Worked Examples</h2>

        <p><strong>Example 1:</strong> If the opposite side is 6 cm and the hypotenuse is 10 cm, find sin θ.</p>
        <p>sin θ = 6/10 = <strong>0.6</strong>.</p>

        <p><strong>Example 2:</strong> If tan θ = 3/4, find θ.</p>
        <p>θ = tan⁻¹(3/4) ≈ <strong>36.87°</strong>.</p>

        <p><strong>Example 3:</strong> A right triangle has hypotenuse 10 cm and angle 30°. Find the opposite side.</p>
        <p>sin 30° = opposite/10.</p>
        <p>0.5 = opposite/10.</p>
        <p>Opposite = <strong>5 cm</strong>.</p>
    `,

    practice: `
        <h2>Practice Questions</h2>
        <ol>
            <li>Find sin θ if the opposite side is 8 cm and the hypotenuse is 10 cm.</li>
            <li>Find cos θ if the adjacent side is 12 cm and the hypotenuse is 13 cm.</li>
            <li>Find tan θ if the opposite side is 6 cm and adjacent side is 8 cm.</li>
            <li>Find θ if sin θ = 0.5.</li>
            <li>A right triangle has hypotenuse 20 cm and angle 30°. Find the opposite side.</li>
        </ol>
    `,

    answers: `
        <h2>Answers</h2>
        <ol>
            <li>0.8</li>
            <li>12/13</li>
            <li>3/4</li>
            <li>30°</li>
            <li>10 cm</li>
        </ol>
    `
},

// ============================================================
// TOPIC 18: BEARINGS
// ============================================================

18: {
    title: "Bearings",

    lesson: `
        <h2>Lesson: Bearings</h2>
        <p>A bearing is an angle measured clockwise from North.</p>

        <ul>
            <li>Bearings are measured from North.</li>
            <li>They are measured clockwise.</li>
            <li>Bearings are written using three digits.</li>
        </ul>

        <p>For example, 060° means 60° clockwise from North, while 225° means 225° clockwise from North.</p>
    `,

    examples: `
        <h2>Worked Examples</h2>

        <p><strong>Example 1:</strong> What is the bearing of East?</p>
        <p>East is 90° clockwise from North.</p>
        <p>Answer: <strong>090°</strong>.</p>

        <p><strong>Example 2:</strong> What is the bearing of South?</p>
        <p>South is 180° clockwise from North.</p>
        <p>Answer: <strong>180°</strong>.</p>

        <p><strong>Example 3:</strong> A town B is on a bearing of 135° from town A. In which general direction is B?</p>
        <p>135° lies between East and South.</p>
        <p>Therefore B is to the <strong>South-East</strong> of A.</p>
    `,

    practice: `
        <h2>Practice Questions</h2>
        <ol>
            <li>Write the bearing of East.</li>
            <li>Write the bearing of South.</li>
            <li>Write the bearing of West.</li>
            <li>What direction is represented by 045°?</li>
            <li>What general direction is represented by 225°?</li>
        </ol>
    `,

    answers: `
        <h2>Answers</h2>
        <ol>
            <li>090°</li>
            <li>180°</li>
            <li>270°</li>
            <li>North-East</li>
            <li>South-West</li>
        </ol>
    `
},

// ============================================================
// TOPIC 19: VECTORS
// ============================================================

19: {
    title: "Vectors",

    lesson: `
        <h2>Lesson: Vectors</h2>
        <p>A vector is a quantity that has both magnitude and direction.</p>

        <p>Examples include displacement, velocity and force.</p>

        <h3>Vector Operations</h3>
        <p>Vectors can be added, subtracted and multiplied by scalars.</p>

        <p>If a = (x, y) and b = (p, q), then:</p>
        <ul>
            <li>a + b = (x + p, y + q)</li>
            <li>a - b = (x - p, y - q)</li>
        </ul>
    `,

    examples: `
        <h2>Worked Examples</h2>

        <p><strong>Example 1:</strong> If a = (3, 4) and b = (2, 1), find a + b.</p>
        <p>a + b = (3 + 2, 4 + 1) = <strong>(5, 5)</strong>.</p>

        <p><strong>Example 2:</strong> Find a - b for a = (7, 5) and b = (2, 3).</p>
        <p>a - b = (7 - 2, 5 - 3) = <strong>(5, 2)</strong>.</p>

        <p><strong>Example 3:</strong> Find 3a if a = (2, -1).</p>
        <p>3a = 3(2, -1) = <strong>(6, -3)</strong>.</p>
    `,

    practice: `
        <h2>Practice Questions</h2>
        <ol>
            <li>If a = (4, 3) and b = (2, 5), find a + b.</li>
            <li>If a = (8, 6) and b = (3, 2), find a - b.</li>
            <li>Find 4a if a = (2, 3).</li>
            <li>Find 2b if b = (-1, 5).</li>
            <li>If a = (5, 2), find -a.</li>
        </ol>
    `,

    answers: `
        <h2>Answers</h2>
        <ol>
            <li>(6, 8)</li>
            <li>(5, 4)</li>
            <li>(8, 12)</li>
            <li>(-2, 10)</li>
            <li>(-5, -2)</li>
        </ol>
    `
},

// ============================================================
// TOPIC 20: STATISTICS
// ============================================================

20: {
    title: "Statistics",

    lesson: `
        <h2>Lesson: Statistics</h2>
        <p>Statistics is the collection, organization, presentation and interpretation of data.</p>

        <h3>Types of Data</h3>
        <ul>
            <li>Qualitative data describes qualities.</li>
            <li>Quantitative data consists of numerical values.</li>
            <li>Discrete data consists of countable values.</li>
            <li>Continuous data can take values within an interval.</li>
        </ul>

        <p>Data can be presented using tables, bar charts, pie charts, histograms and frequency polygons.</p>
    `,

    examples: `
        <h2>Worked Examples</h2>

        <p><strong>Example 1:</strong> Find the mean of 4, 6, 8, 10 and 12.</p>
        <p>Mean = (4 + 6 + 8 + 10 + 12)/5 = 40/5 = <strong>8</strong>.</p>

        <p><strong>Example 2:</strong> Find the range of 3, 7, 12, 15 and 20.</p>
        <p>Range = 20 - 3 = <strong>17</strong>.</p>

        <p><strong>Example 3:</strong> Find the median of 2, 5, 7, 9 and 11.</p>
        <p>The middle value is 7.</p>
        <p>Median = <strong>7</strong>.</p>
    `,

    practice: `
        <h2>Practice Questions</h2>
        <ol>
            <li>Find the mean of 5, 7, 9 and 11.</li>
            <li>Find the range of 4, 9, 12, 15 and 21.</li>
            <li>Find the median of 3, 5, 8, 10 and 14.</li>
            <li>Find the mode of 2, 3, 3, 4, 5, 3 and 6.</li>
            <li>What is the difference between discrete and continuous data?</li>
        </ol>
    `,

    answers: `
        <h2>Answers</h2>
        <ol>
            <li>8</li>
            <li>17</li>
            <li>8</li>
            <li>3</li>
            <li>Discrete data is countable, while continuous data can take any value within a range.</li>
        </ol>
    `
},

// ============================================================
// TOPIC 21: MEASURES OF CENTRAL TENDENCY
// ============================================================

21: {
    title: "Measures of Central Tendency",

    lesson: `
        <h2>Lesson: Measures of Central Tendency</h2>
        <p>The three main measures of central tendency are mean, median and mode.</p>

        <ul>
            <li><strong>Mean:</strong> Sum of observations divided by number of observations.</li>
            <li><strong>Median:</strong> Middle value when data is arranged in order.</li>
            <li><strong>Mode:</strong> Most frequently occurring value.</li>
        </ul>

        <p>For frequency distributions:</p>
        <p>Mean = Σfx / Σf.</p>
    `,

    examples: `
        <h2>Worked Examples</h2>

        <p><strong>Example 1:</strong> Find the mean of 6, 8, 10 and 12.</p>
        <p>Mean = 36/4 = <strong>9</strong>.</p>

        <p><strong>Example 2:</strong> Find the median of 4, 6, 7, 9 and 12.</p>
        <p>The middle value is <strong>7</strong>.</p>

        <p><strong>Example 3:</strong> Find the mode of 3, 5, 5, 6, 7, 5 and 8.</p>
        <p>5 occurs most often.</p>
        <p>Mode = <strong>5</strong>.</p>
    `,

    practice: `
        <h2>Practice Questions</h2>
        <ol>
            <li>Find the mean of 2, 4, 6, 8 and 10.</li>
            <li>Find the median of 3, 7, 9, 12 and 15.</li>
            <li>Find the mode of 2, 4, 4, 5, 6, 4 and 7.</li>
            <li>Find the mean of 5, 10, 15 and 20.</li>
            <li>State the three common measures of central tendency.</li>
        </ol>
    `,

    answers: `
        <h2>Answers</h2>
        <ol>
            <li>6</li>
            <li>9</li>
            <li>4</li>
            <li>12.5</li>
            <li>Mean, median and mode.</li>
        </ol>
    `
},

// ============================================================
// TOPIC 22: PROBABILITY
// ============================================================

22: {
    title: "Probability",

    lesson: `
        <h2>Lesson: Probability</h2>
        <p>Probability measures the likelihood of an event occurring.</p>

        <p>For equally likely outcomes:</p>
        <p><strong>P(E) = Number of favourable outcomes / Total number of possible outcomes.</strong></p>

        <p>Probability is always between 0 and 1.</p>
        <ul>
            <li>0 means impossible.</li>
            <li>1 means certain.</li>
        </ul>

        <p>The complement of an event E is given by:</p>
        <p>P(E') = 1 - P(E).</p>
    `,

    examples: `
        <h2>Worked Examples</h2>

        <p><strong>Example 1:</strong> Find the probability of obtaining a head when a fair coin is tossed.</p>
        <p>P(H) = 1/2.</p>

        <p><strong>Example 2:</strong> Find the probability of obtaining a 4 when a fair die is thrown.</p>
        <p>There are 6 possible outcomes and one favourable outcome.</p>
        <p>P(4) = <strong>1/6</strong>.</p>

        <p><strong>Example 3:</strong> If P(A) = 0.3, find P(A').</p>
        <p>P(A') = 1 - 0.3 = <strong>0.7</strong>.</p>
    `,

    practice: `
        <h2>Practice Questions</h2>
        <ol>
            <li>Find the probability of getting a tail from a fair coin.</li>
            <li>Find the probability of rolling a 6 on a fair die.</li>
            <li>Find the probability of rolling an even number on a fair die.</li>
            <li>If P(A) = 0.25, find P(A').</li>
            <li>What is the probability of an impossible event?</li>
        </ol>
    `,

    answers: `
        <h2>Answers</h2>
        <ol>
            <li>1/2</li>
            <li>1/6</li>
            <li>1/2</li>
            <li>0.75</li>
            <li>0</li>
        </ol>
    `
},

// ============================================================
// TOPIC 23: PERMUTATION
// ============================================================

23: {
    title: "Permutation",

    lesson: `
        <h2>Lesson: Permutation</h2>
        <p>A permutation is an arrangement of objects where order matters.</p>

        <p>The number of arrangements of n different objects is:</p>
        <p><strong>n! = n(n - 1)(n - 2)...1</strong></p>

        <p>For selecting and arranging r objects from n objects:</p>
        <p><strong>nPr = n!/(n-r)!</strong></p>
    `,

    examples: `
        <h2>Worked Examples</h2>

        <p><strong>Example 1:</strong> Find 5!.</p>
        <p>5! = 5 × 4 × 3 × 2 × 1 = <strong>120</strong>.</p>

        <p><strong>Example 2:</strong> Find 5P2.</p>
        <p>5P2 = 5!/(5-2)! = 5!/3! = 5 × 4 = <strong>20</strong>.</p>

        <p><strong>Example 3:</strong> In how many ways can 4 students stand in a line?</p>
        <p>Number of arrangements = 4! = <strong>24</strong>.</p>
    `,

    practice: `
        <h2>Practice Questions</h2>
        <ol>
            <li>Find 4!.</li>
            <li>Find 6!.</li>
            <li>Find 6P2.</li>
            <li>Find 7P3.</li>
            <li>In how many ways can 5 people stand in a straight line?</li>
        </ol>
    `,

    answers: `
        <h2>Answers</h2>
        <ol>
            <li>24</li>
            <li>720</li>
            <li>30</li>
            <li>210</li>
            <li>120</li>
        </ol>
    `
},

// ============================================================
// TOPIC 24: COMBINATION
// ============================================================

24: {
    title: "Combination",

    lesson: `
        <h2>Lesson: Combination</h2>
        <p>A combination is a selection of objects where order does not matter.</p>

        <p>The formula is:</p>
        <p><strong>nCr = n!/[r!(n-r)!]</strong></p>

        <p>For example, selecting three students from five students is a combination because the order of selection is irrelevant.</p>
    `,

    examples: `
        <h2>Worked Examples</h2>

        <p><strong>Example 1:</strong> Find 5C2.</p>
        <p>5C2 = 5!/(2!3!) = <strong>10</strong>.</p>

        <p><strong>Example 2:</strong> Find 6C3.</p>
        <p>6C3 = 6!/(3!3!) = <strong>20</strong>.</p>

        <p><strong>Example 3:</strong> From 8 students, how many ways can 2 be selected?</p>
        <p>8C2 = 8!/(2!6!) = <strong>28</strong>.</p>
    `,

    practice: `
        <h2>Practice Questions</h2>
        <ol>
            <li>Find 4C2.</li>
            <li>Find 5C3.</li>
            <li>Find 7C2.</li>
            <li>Find 8C3.</li>
            <li>From 10 students, how many ways can 2 students be selected?</li>
        </ol>
    `,

    answers: `
        <h2>Answers</h2>
        <ol>
            <li>6</li>
            <li>10</li>
            <li>21</li>
            <li>56</li>
            <li>45</li>
        </ol>
    `
},

// ============================================================
// TOPIC 25: BINOMIAL EXPANSION
// ============================================================

25: {
    title: "Binomial Expansion",

    lesson: `
        <h2>Lesson: Binomial Expansion</h2>
        <p>The binomial theorem provides a systematic method for expanding powers of expressions containing two terms.</p>

        <p>For example:</p>
        <p>(a + b)² = a² + 2ab + b².</p>

        <p>For higher powers, binomial coefficients can be obtained from Pascal's triangle or combination notation.</p>
    `,

    examples: `
        <h2>Worked Examples</h2>

        <p><strong>Example 1:</strong> Expand (x + 2)².</p>
        <p>(x + 2)² = x² + 4x + 4.</p>

        <p><strong>Example 2:</strong> Expand (x + 3)³.</p>
        <p>(x + 3)³ = <strong>x³ + 9x² + 27x + 27</strong>.</p>

        <p><strong>Example 3:</strong> Find the coefficient of x in (x + 2)³.</p>
        <p>The expansion is x³ + 6x² + 12x + 8.</p>
        <p>Coefficient of x = <strong>12</strong>.</p>
    `,

    practice: `
        <h2>Practice Questions</h2>
        <ol>
            <li>Expand (x + 1)².</li>
            <li>Expand (x + 2)².</li>
            <li>Expand (x + 1)³.</li>
            <li>Expand (x + 2)³.</li>
            <li>Find the coefficient of x in (x + 3)³.</li>
        </ol>
    `,

    answers: `
        <h2>Answers</h2>
        <ol>
            <li>x² + 2x + 1</li>
            <li>x² + 4x + 4</li>
            <li>x³ + 3x² + 3x + 1</li>
            <li>x³ + 6x² + 12x + 8</li>
            <li>27</li>
        </ol>
    `
},

// ============================================================
// TOPIC 26: MATRICES AND DETERMINANTS
// ============================================================

26: {
    title: "Matrices and Determinants",

    lesson: `
        <h2>Lesson: Matrices and Determinants</h2>
        <p>A matrix is a rectangular arrangement of numbers in rows and columns.</p>

        <p>For a 2 × 2 matrix:</p>

        <p>
            A = [ a  b ]<br>
                [ c  d ]
        </p>

        <p>The determinant is:</p>
        <p><strong>|A| = ad - bc</strong>.</p>

        <p>A matrix can be added to another matrix only when they have the same order.</p>
    `,

    examples: `
        <h2>Worked Examples</h2>

        <p><strong>Example 1:</strong> Find the determinant of:</p>
        <p>
            A = [ 3  2 ]<br>
                [ 1  4 ]
        </p>
        <p>|A| = (3 × 4) - (2 × 1) = 12 - 2 = <strong>10</strong>.</p>

        <p><strong>Example 2:</strong> Add:</p>
        <p>A = [1 2; 3 4] and B = [2 1; 4 3].</p>
        <p>A + B = <strong>[3 3; 7 7]</strong>.</p>

        <p><strong>Example 3:</strong> Multiply [2 3; 1 4] by 2.</p>
        <p>Result = <strong>[4 6; 2 8]</strong>.</p>
    `,

    practice: `
        <h2>Practice Questions</h2>
        <ol>
            <li>Find the determinant of [2 1; 3 4].</li>
            <li>Find the determinant of [5 2; 1 3].</li>
            <li>Add [1 2; 3 4] and [2 3; 4 5].</li>
            <li>Multiply [2 1; 3 4] by 3.</li>
            <li>State the condition for two matrices to be added.</li>
        </ol>
    `,

    answers: `
        <h2>Answers</h2>
        <ol>
            <li>5</li>
            <li>13</li>
            <li>[3 5; 7 9]</li>
            <li>[6 3; 9 12]</li>
            <li>They must have the same order.</li>
        </ol>
    `
},

// ============================================================
// TOPIC 27: LOGARITHMIC EQUATIONS
// ============================================================

27: {
    title: "Logarithmic Equations",

    lesson: `
        <h2>Lesson: Logarithmic Equations</h2>
        <p>A logarithmic equation contains logarithms of unknown quantities.</p>

        <h3>Important Laws</h3>
        <ul>
            <li>log(ab) = log a + log b</li>
            <li>log(a/b) = log a - log b</li>
            <li>log(aⁿ) = n log a</li>
        </ul>

        <p>When solving logarithmic equations, remember that the argument of a logarithm must be positive.</p>
    `,

    examples: `
        <h2>Worked Examples</h2>

        <p><strong>Example 1:</strong> Solve log₁₀ x = 2.</p>
        <p>x = 10² = <strong>100</strong>.</p>

        <p><strong>Example 2:</strong> Solve log₁₀ x + log₁₀ 2 = 2.</p>
        <p>log₁₀(2x) = 2.</p>
        <p>2x = 100.</p>
        <p>x = <strong>50</strong>.</p>

        <p><strong>Example 3:</strong> Solve log₁₀(x - 1) = 1.</p>
        <p>x - 1 = 10.</p>
        <p>x = <strong>11</strong>.</p>
    `,

    practice: `
        <h2>Practice Questions</h2>
        <ol>
            <li>Solve log₁₀x = 3.</li>
            <li>Solve log₁₀x = 1.</li>
            <li>Solve log₁₀(x - 2) = 2.</li>
            <li>Solve log₁₀x + log₁₀2 = 1.</li>
            <li>State the restriction on the argument of a logarithm.</li>
        </ol>
    `,

    answers: `
        <h2>Answers</h2>
        <ol>
            <li>1000</li>
            <li>10</li>
            <li>102</li>
            <li>5</li>
            <li>The argument must be positive.</li>
        </ol>
    `
},

// ============================================================
// TOPIC 28: INDICES AND EXPONENTIAL EQUATIONS
// ============================================================

28: {
    title: "Indices and Exponential Equations",

    lesson: `
        <h2>Lesson: Indices and Exponential Equations</h2>
        <p>Indices are powers or exponents attached to numbers or variables.</p>

        <h3>Laws of Indices</h3>
        <ul>
            <li>aᵐ × aⁿ = aᵐ⁺ⁿ</li>
            <li>aᵐ ÷ aⁿ = aᵐ⁻ⁿ</li>
            <li>(aᵐ)ⁿ = aᵐⁿ</li>
            <li>a⁰ = 1</li>
            <li>a⁻ⁿ = 1/aⁿ</li>
        </ul>

        <p>Exponential equations can often be solved by expressing both sides using the same base.</p>
    `,

    examples: `
        <h2>Worked Examples</h2>

        <p><strong>Example 1:</strong> Simplify 2³ × 2⁴.</p>
        <p>2³ × 2⁴ = 2⁷ = <strong>128</strong>.</p>

        <p><strong>Example 2:</strong> Solve 2ˣ = 32.</p>
        <p>Since 32 = 2⁵, x = <strong>5</strong>.</p>

        <p><strong>Example 3:</strong> Simplify x⁵/x².</p>
        <p>x⁵/x² = <strong>x³</strong>.</p>
    `,

    practice: `
        <h2>Practice Questions</h2>
        <ol>
            <li>Simplify 3² × 3³.</li>
            <li>Simplify x⁷/x³.</li>
            <li>Solve 2ˣ = 16.</li>
            <li>Solve 3ˣ = 27.</li>
            <li>Simplify (a²)³.</li>
        </ol>
    `,

    answers: `
        <h2>Answers</h2>
        <ol>
            <li>3⁵ = 243</li>
            <li>x⁴</li>
            <li>x = 4</li>
            <li>x = 3</li>
            <li>a⁶</li>
        </ol>
    `
},

// ============================================================
// TOPIC 29: SEQUENCES AND SERIES
// ============================================================

29: {
    title: "Sequences and Series",

    lesson: `
        <h2>Lesson: Sequences and Series</h2>
        <p>A sequence is an ordered list of numbers following a particular pattern.</p>

        <h3>Arithmetic Progression</h3>
        <p>The nth term is:</p>
        <p><strong>Tₙ = a + (n - 1)d</strong></p>

        <p>The sum of the first n terms is:</p>
        <p><strong>Sₙ = n/2[2a + (n - 1)d]</strong></p>

        <p>where a is the first term and d is the common difference.</p>
    `,

    examples: `
        <h2>Worked Examples</h2>

        <p><strong>Example 1:</strong> Find the 10th term of 3, 7, 11, 15,...</p>
        <p>a = 3, d = 4.</p>
        <p>T₁₀ = 3 + 9(4) = <strong>39</strong>.</p>

        <p><strong>Example 2:</strong> Find the sum of the first 10 terms of 2, 5, 8,...</p>
        <p>a = 2, d = 3.</p>
        <p>S₁₀ = 10/2[4 + 27] = 5 × 31 = <strong>155</strong>.</p>

        <p><strong>Example 3:</strong> Find the common difference of 12, 17, 22, 27,...</p>
        <p>d = 17 - 12 = <strong>5</strong>.</p>
    `,

    practice: `
        <h2>Practice Questions</h2>
        <ol>
            <li>Find the 8th term of 2, 5, 8, 11,...</li>
            <li>Find the common difference of 7, 12, 17, 22,...</li>
            <li>Find the 10th term of 4, 7, 10,...</li>
            <li>Find the sum of the first 5 terms of 3, 6, 9, 12,...</li>
            <li>Find the 15th term of an AP with a = 2 and d = 4.</li>
        </ol>
    `,

    answers: `
        <h2>Answers</h2>
        <ol>
            <li>23</li>
            <li>5</li>
            <li>31</li>
            <li>45</li>
            <li>58</li>
        </ol>
    `
},

// ============================================================
// TOPIC 30: QUADRATIC EQUATIONS
// ============================================================

30: {
    title: "Quadratic Equations",

    lesson: `
        <h2>Lesson: Quadratic Equations</h2>
        <p>A quadratic equation is an equation of the form:</p>
        <p><strong>ax² + bx + c = 0</strong>, where a ≠ 0.</p>

        <h3>Methods of Solving</h3>
        <ul>
            <li>Factorization</li>
            <li>Completing the square</li>
            <li>Quadratic formula</li>
        </ul>

        <p>The quadratic formula is:</p>
        <p><strong>x = [-b ± √(b² - 4ac)] / 2a</strong></p>

        <p>The expression b² - 4ac is called the discriminant.</p>
    `,

    examples: `
        <h2>Worked Examples</h2>

        <p><strong>Example 1:</strong> Solve x² - 5x + 6 = 0.</p>
        <p>(x - 2)(x - 3) = 0.</p>
        <p>Therefore x = <strong>2 or 3</strong>.</p>

        <p><strong>Example 2:</strong> Solve x² - 9 = 0.</p>
        <p>x² = 9.</p>
        <p>x = <strong>±3</strong>.</p>

        <p><strong>Example 3:</strong> Solve 2x² - 5x + 2 = 0.</p>
        <p>(2x - 1)(x - 2) = 0.</p>
        <p>Therefore x = <strong>1/2 or 2</strong>.</p>
    `,

    practice: `
        <h2>Practice Questions</h2>
        <ol>
            <li>Solve x² - 7x + 12 = 0.</li>
            <li>Solve x² - 16 = 0.</li>
            <li>Solve x² + 5x + 6 = 0.</li>
            <li>Solve 2x² - 7x + 3 = 0.</li>
            <li>State the quadratic formula.</li>
        </ol>
    `,

    answers: `
        <h2>Answers</h2>
        <ol>
            <li>x = 3 or 4</li>
            <li>x = ±4</li>
            <li>x = -2 or -3</li>
            <li>x = 3 or 1/2</li>
            <li>x = [-b ± √(b² - 4ac)]/2a</li>
        </ol>
    `
},// ============================================================
// BATCH 3: TOPICS 31 - 45
// ============================================================

// ============================================================
// TOPIC 31: LINEAR INEQUALITIES
// ============================================================

31: {
    title: "Linear Inequalities",

    lesson: `
        <h2>Lesson: Linear Inequalities</h2>
        <p>An inequality compares two quantities using symbols such as &lt;, &gt;, ≤ and ≥.</p>

        <p>Examples include:</p>
        <ul>
            <li>x &lt; 5</li>
            <li>x &gt; 2</li>
            <li>x ≤ 7</li>
            <li>x ≥ 3</li>
        </ul>

        <p>When an inequality is multiplied or divided by a negative number, the inequality sign must be reversed.</p>
    `,

    examples: `
        <h2>Worked Examples</h2>

        <p><strong>Example 1:</strong> Solve x + 4 &gt; 9.</p>
        <p>x &gt; 9 - 4.</p>
        <p><strong>x &gt; 5</strong>.</p>

        <p><strong>Example 2:</strong> Solve 3x ≤ 12.</p>
        <p>x ≤ 12/3.</p>
        <p><strong>x ≤ 4</strong>.</p>

        <p><strong>Example 3:</strong> Solve -2x &gt; 8.</p>
        <p>Divide by -2 and reverse the sign.</p>
        <p><strong>x &lt; -4</strong>.</p>
    `,

    practice: `
        <h2>Practice Questions</h2>
        <ol>
            <li>Solve x + 3 &gt; 8.</li>
            <li>Solve 2x ≤ 10.</li>
            <li>Solve 4x - 3 ≥ 9.</li>
            <li>Solve -3x &gt; 12.</li>
            <li>State what happens to the inequality sign when dividing by a negative number.</li>
        </ol>
    `,

    answers: `
        <h2>Answers</h2>
        <ol>
            <li>x &gt; 5</li>
            <li>x ≤ 5</li>
            <li>x ≥ 3</li>
            <li>x &lt; -4</li>
            <li>The inequality sign is reversed.</li>
        </ol>
    `
},

// ============================================================
// TOPIC 32: FUNCTIONS
// ============================================================

32: {
    title: "Functions",

    lesson: `
        <h2>Lesson: Functions</h2>
        <p>A function is a rule that assigns exactly one output to each input.</p>

        <p>If f(x) = 2x + 3, then the value of the function is obtained by substituting the required value of x.</p>

        <h3>Important Terms</h3>
        <ul>
            <li>Domain: set of possible input values.</li>
            <li>Range: set of resulting output values.</li>
            <li>Image: output produced by a particular input.</li>
        </ul>
    `,

    examples: `
        <h2>Worked Examples</h2>

        <p><strong>Example 1:</strong> If f(x) = 3x + 2, find f(4).</p>
        <p>f(4) = 3(4) + 2 = 12 + 2 = <strong>14</strong>.</p>

        <p><strong>Example 2:</strong> If f(x) = x² - 1, find f(5).</p>
        <p>f(5) = 25 - 1 = <strong>24</strong>.</p>

        <p><strong>Example 3:</strong> If f(x) = 2x + 5 and f(x) = 13, find x.</p>
        <p>2x + 5 = 13.</p>
        <p>2x = 8.</p>
        <p><strong>x = 4</strong>.</p>
    `,

    practice: `
        <h2>Practice Questions</h2>
        <ol>
            <li>If f(x) = 2x + 1, find f(5).</li>
            <li>If f(x) = x² + 2, find f(3).</li>
            <li>If f(x) = 4x - 1, find f(2).</li>
            <li>If f(x) = 3x + 4 and f(x) = 19, find x.</li>
            <li>What is the range of a function?</li>
        </ol>
    `,

    answers: `
        <h2>Answers</h2>
        <ol>
            <li>11</li>
            <li>11</li>
            <li>7</li>
            <li>x = 5</li>
            <li>The set of output values.</li>
        </ol>
    `
},

// ============================================================
// TOPIC 33: GRAPH OF FUNCTIONS
// ============================================================

33: {
    title: "Graph of Functions",

    lesson: `
        <h2>Lesson: Graph of Functions</h2>
        <p>A graph shows the relationship between two variables.</p>

        <p>For a function y = f(x), values of x are plotted on the horizontal axis while values of y are plotted on the vertical axis.</p>

        <p>A linear function has the general form y = mx + c, where m is the gradient and c is the y-intercept.</p>
    `,

    examples: `
        <h2>Worked Examples</h2>

        <p><strong>Example 1:</strong> Find y when x = 3 in y = 2x + 1.</p>
        <p>y = 2(3) + 1 = <strong>7</strong>.</p>

        <p><strong>Example 2:</strong> Find the gradient of y = 4x + 5.</p>
        <p>Comparing with y = mx + c:</p>
        <p>m = <strong>4</strong>.</p>

        <p><strong>Example 3:</strong> Find the y-intercept of y = 3x - 7.</p>
        <p>c = <strong>-7</strong>.</p>
    `,

    practice: `
        <h2>Practice Questions</h2>
        <ol>
            <li>Find y when x = 4 in y = 2x + 3.</li>
            <li>Find the gradient of y = 5x + 2.</li>
            <li>Find the y-intercept of y = 2x - 6.</li>
            <li>Find y when x = -2 in y = 3x + 1.</li>
            <li>State the general form of a straight-line equation.</li>
        </ol>
    `,

    answers: `
        <h2>Answers</h2>
        <ol>
            <li>11</li>
            <li>5</li>
            <li>-6</li>
            <li>-5</li>
            <li>y = mx + c</li>
        </ol>
    `
},

// ============================================================
// TOPIC 34: STRAIGHT LINES
// ============================================================

34: {
    title: "Straight Lines",

    lesson: `
        <h2>Lesson: Straight Lines</h2>
        <p>The gradient of a straight line measures its steepness.</p>

        <p>For two points (x₁, y₁) and (x₂, y₂):</p>
        <p><strong>Gradient = (y₂ - y₁)/(x₂ - x₁)</strong></p>

        <p>The equation of a straight line is commonly written as:</p>
        <p><strong>y = mx + c</strong>.</p>
    `,

    examples: `
        <h2>Worked Examples</h2>

        <p><strong>Example 1:</strong> Find the gradient through (1, 2) and (3, 8).</p>
        <p>m = (8 - 2)/(3 - 1) = 6/2 = <strong>3</strong>.</p>

        <p><strong>Example 2:</strong> Find the equation of a line with gradient 2 and y-intercept 5.</p>
        <p>y = mx + c.</p>
        <p><strong>y = 2x + 5</strong>.</p>

        <p><strong>Example 3:</strong> Find the x-intercept of y = 2x - 6.</p>
        <p>At the x-intercept, y = 0.</p>
        <p>0 = 2x - 6.</p>
        <p>x = <strong>3</strong>.</p>
    `,

    practice: `
        <h2>Practice Questions</h2>
        <ol>
            <li>Find the gradient through (2, 3) and (4, 9).</li>
            <li>Find the gradient of y = 7x + 2.</li>
            <li>Find the equation of a line with gradient 3 and intercept 4.</li>
            <li>Find the x-intercept of y = 4x - 8.</li>
            <li>Find the y-intercept of y = 5x + 9.</li>
        </ol>
    `,

    answers: `
        <h2>Answers</h2>
        <ol>
            <li>3</li>
            <li>7</li>
            <li>y = 3x + 4</li>
            <li>2</li>
            <li>9</li>
        </ol>
    `
},

// ============================================================
// TOPIC 35: CIRCLE GEOMETRY
// ============================================================

35: {
    title: "Circle Geometry",

    lesson: `
        <h2>Lesson: Circle Geometry</h2>
        <p>Circle geometry deals with relationships between angles, chords, arcs and tangents.</p>

        <h3>Important Theorems</h3>
        <ul>
            <li>The angle at the centre is twice the angle at the circumference standing on the same arc.</li>
            <li>Angles in the same segment are equal.</li>
            <li>The angle in a semicircle is 90°.</li>
            <li>Opposite angles of a cyclic quadrilateral are supplementary.</li>
        </ul>
    `,

    examples: `
        <h2>Worked Examples</h2>

        <p><strong>Example 1:</strong> An angle at the circumference is 35°. Find the angle at the centre standing on the same arc.</p>
        <p>Centre angle = 2 × 35° = <strong>70°</strong>.</p>

        <p><strong>Example 2:</strong> One angle of a cyclic quadrilateral is 110°. Find its opposite angle.</p>
        <p>Opposite angles sum to 180°.</p>
        <p>Angle = 180° - 110° = <strong>70°</strong>.</p>

        <p><strong>Example 3:</strong> What is the angle in a semicircle?</p>
        <p>It is always <strong>90°</strong>.</p>
    `,

    practice: `
        <h2>Practice Questions</h2>
        <ol>
            <li>An angle at the circumference is 40°. Find the corresponding angle at the centre.</li>
            <li>One angle of a cyclic quadrilateral is 75°. Find the opposite angle.</li>
            <li>State the angle in a semicircle.</li>
            <li>State the theorem concerning angles in the same segment.</li>
            <li>If the centre angle is 120°, find the angle at the circumference standing on the same arc.</li>
        </ol>
    `,

    answers: `
        <h2>Answers</h2>
        <ol>
            <li>80°</li>
            <li>105°</li>
            <li>90°</li>
            <li>Angles in the same segment are equal.</li>
            <li>60°</li>
        </ol>
    `
},

// ============================================================
// TOPIC 36: CIRCLES AND TANGENTS
// ============================================================

36: {
    title: "Circles and Tangents",

    lesson: `
        <h2>Lesson: Circles and Tangents</h2>
        <p>A tangent is a straight line that touches a circle at exactly one point.</p>

        <p>The radius drawn to the point of contact of a tangent is perpendicular to the tangent.</p>

        <p>Tangents drawn from the same external point to a circle have equal lengths.</p>
    `,

    examples: `
        <h2>Worked Examples</h2>

        <p><strong>Example 1:</strong> What angle does the radius make with a tangent at the point of contact?</p>
        <p>The angle is <strong>90°</strong>.</p>

        <p><strong>Example 2:</strong> Two tangents from point P have lengths 8 cm and x cm. Find x.</p>
        <p>Tangents from the same point are equal.</p>
        <p>x = <strong>8 cm</strong>.</p>

        <p><strong>Example 3:</strong> A tangent touches a circle at A. If OA is a radius, what is angle OAP?</p>
        <p>OA is perpendicular to the tangent.</p>
        <p>Angle OAP = <strong>90°</strong>.</p>
    `,

    practice: `
        <h2>Practice Questions</h2>
        <ol>
            <li>What angle does a radius make with a tangent?</li>
            <li>If two tangents from a point have lengths 12 cm and x cm, find x.</li>
            <li>What is a tangent?</li>
            <li>How many points does a tangent have in common with a circle?</li>
            <li>State the relationship between equal tangents from an external point.</li>
        </ol>
    `,

    answers: `
        <h2>Answers</h2>
        <ol>
            <li>90°</li>
            <li>12 cm</li>
            <li>A line that touches a circle at exactly one point.</li>
            <li>One point.</li>
            <li>They have equal lengths.</li>
        </ol>
    `
},

// ============================================================
// TOPIC 37: POLYGON GEOMETRY
// ============================================================

37: {
    title: "Polygon Geometry",

    lesson: `
        <h2>Lesson: Polygon Geometry</h2>
        <p>A polygon is a closed plane figure made up of straight line segments.</p>

        <p>The sum of the interior angles of an n-sided polygon is:</p>
        <p><strong>(n - 2) × 180°</strong></p>

        <p>For a regular polygon, each interior angle is:</p>
        <p><strong>[(n - 2) × 180°]/n</strong></p>
    `,

    examples: `
        <h2>Worked Examples</h2>

        <p><strong>Example 1:</strong> Find the sum of the interior angles of a hexagon.</p>
        <p>(6 - 2) × 180° = <strong>720°</strong>.</p>

        <p><strong>Example 2:</strong> Find each interior angle of a regular pentagon.</p>
        <p>(5 - 2) × 180° = 540°.</p>
        <p>540°/5 = <strong>108°</strong>.</p>

        <p><strong>Example 3:</strong> Find the sum of interior angles of an octagon.</p>
        <p>(8 - 2) × 180° = <strong>1080°</strong>.</p>
    `,

    practice: `
        <h2>Practice Questions</h2>
        <ol>
            <li>Find the sum of the interior angles of a pentagon.</li>
            <li>Find the sum of the interior angles of a heptagon.</li>
            <li>Find each interior angle of a regular hexagon.</li>
            <li>Find each interior angle of a regular octagon.</li>
            <li>State the formula for the sum of interior angles of an n-sided polygon.</li>
        </ol>
    `,

    answers: `
        <h2>Answers</h2>
        <ol>
            <li>540°</li>
            <li>900°</li>
            <li>120°</li>
            <li>135°</li>
            <li>(n - 2) × 180°</li>
        </ol>
    `
},

// ============================================================
// TOPIC 38: CONSTRUCTION
// ============================================================

38: {
    title: "Geometrical Construction",

    lesson: `
        <h2>Lesson: Geometrical Construction</h2>
        <p>Geometrical construction involves drawing accurate figures using instruments such as a ruler and compass.</p>

        <h3>Common Constructions</h3>
        <ul>
            <li>Perpendicular bisector of a line.</li>
            <li>Angle bisector.</li>
            <li>Perpendicular from a point to a line.</li>
            <li>Triangles with given measurements.</li>
        </ul>

        <p>A compass is used to draw arcs and transfer equal distances.</p>
    `,

    examples: `
        <h2>Worked Examples</h2>

        <p><strong>Example 1:</strong> How is an angle bisected?</p>
        <p>Draw an arc from the vertex cutting both arms. Using the same radius, draw arcs from the two intersection points. Join the vertex to the point where the arcs meet.</p>

        <p><strong>Example 2:</strong> What does a perpendicular bisector do to a line segment?</p>
        <p>It cuts the line into two equal parts at <strong>90°</strong>.</p>

        <p><strong>Example 3:</strong> What instrument is used to draw accurate arcs?</p>
        <p>A <strong>compass</strong>.</p>
    `,

    practice: `
        <h2>Practice Questions</h2>
        <ol>
            <li>What instrument is used for drawing arcs?</li>
            <li>What angle is formed by a perpendicular bisector and the line it bisects?</li>
            <li>What does an angle bisector do?</li>
            <li>Name one common geometrical construction.</li>
            <li>What instrument is commonly used for drawing straight lines?</li>
        </ol>
    `,

    answers: `
        <h2>Answers</h2>
        <ol>
            <li>Compass</li>
            <li>90°</li>
            <li>It divides an angle into two equal angles.</li>
            <li>Perpendicular bisector / angle bisector.</li>
            <li>Ruler.</li>
        </ol>
    `
},

// ============================================================
// TOPIC 39: LOCUS
// ============================================================

39: {
    title: "Locus",

    lesson: `
        <h2>Lesson: Locus</h2>
        <p>A locus is the path followed by a point moving according to a specified condition.</p>

        <p>Examples include:</p>
        <ul>
            <li>Points at a fixed distance from a fixed point form a circle.</li>
            <li>Points equidistant from two fixed points lie on the perpendicular bisector of the line joining them.</li>
            <li>Points equidistant from two intersecting lines lie on their angle bisectors.</li>
        </ul>
    `,

    examples: `
        <h2>Worked Examples</h2>

        <p><strong>Example 1:</strong> What is the locus of points 5 cm from a fixed point O?</p>
        <p>The locus is a <strong>circle of radius 5 cm centred at O</strong>.</p>

        <p><strong>Example 2:</strong> What is the locus of points equidistant from A and B?</p>
        <p>It is the <strong>perpendicular bisector of AB</strong>.</p>

        <p><strong>Example 3:</strong> What is the locus of points equidistant from two intersecting lines?</p>
        <p>It consists of the <strong>two angle bisectors</strong>.</p>
    `,

    practice: `
        <h2>Practice Questions</h2>
        <ol>
            <li>Define a locus.</li>
            <li>What is the locus of points 3 cm from a fixed point?</li>
            <li>What is the locus of points equidistant from two fixed points?</li>
            <li>What is the locus of points equidistant from two intersecting lines?</li>
            <li>What shape is formed by points at a fixed distance from a fixed point?</li>
        </ol>
    `,

    answers: `
        <h2>Answers</h2>
        <ol>
            <li>The path followed by a moving point under a specified condition.</li>
            <li>A circle of radius 3 cm.</li>
            <li>The perpendicular bisector of the line joining the two points.</li>
            <li>The two angle bisectors.</li>
            <li>A circle.</li>
        </ol>
    `
},

// ============================================================
// TOPIC 40: VECTORS IN GEOMETRY
// ============================================================

40: {
    title: "Vectors in Geometry",

    lesson: `
        <h2>Lesson: Vectors in Geometry</h2>
        <p>Vectors can be used to describe movement and prove relationships between points and lines.</p>

        <p>If A and B have position vectors a and b respectively, then:</p>
        <p><strong>AB = b - a</strong>.</p>

        <p>Parallel vectors are scalar multiples of one another.</p>
    `,

    examples: `
        <h2>Worked Examples</h2>

        <p><strong>Example 1:</strong> If OA = (2, 3) and OB = (7, 5), find AB.</p>
        <p>AB = OB - OA.</p>
        <p>AB = (7, 5) - (2, 3) = <strong>(5, 2)</strong>.</p>

        <p><strong>Example 2:</strong> If a = (2, 4), find 3a.</p>
        <p>3a = <strong>(6, 12)</strong>.</p>

        <p><strong>Example 3:</strong> Are (2, 4) and (6, 12) parallel?</p>
        <p>(6, 12) = 3(2, 4).</p>
        <p>Therefore they are <strong>parallel</strong>.</p>
    `,

    practice: `
        <h2>Practice Questions</h2>
        <ol>
            <li>If OA = (1, 2) and OB = (5, 7), find AB.</li>
            <li>If a = (3, 4), find 2a.</li>
            <li>If a = (2, 3) and b = (4, 6), are they parallel?</li>
            <li>Write the formula for AB using position vectors.</li>
            <li>What does a scalar multiple of a vector change?</li>
        </ol>
    `,

    answers: `
        <h2>Answers</h2>
        <ol>
            <li>(4, 5)</li>
            <li>(6, 8)</li>
            <li>Yes.</li>
            <li>AB = b - a</li>
            <li>It changes the magnitude and possibly direction, depending on the scalar.</li>
        </ol>
    `
},

// ============================================================
// TOPIC 41: TRANSFORMATION GEOMETRY
// ============================================================

41: {
    title: "Transformation Geometry",

    lesson: `
        <h2>Lesson: Transformation Geometry</h2>
        <p>A transformation changes the position, size or orientation of a shape.</p>

        <h3>Types of Transformation</h3>
        <ul>
            <li>Translation</li>
            <li>Reflection</li>
            <li>Rotation</li>
            <li>Enlargement</li>
        </ul>

        <p>Translation moves every point the same distance in the same direction.</p>
    `,

    examples: `
        <h2>Worked Examples</h2>

        <p><strong>Example 1:</strong> Translate (2, 3) by the vector (4, -1).</p>
        <p>New point = (2 + 4, 3 - 1) = <strong>(6, 2)</strong>.</p>

        <p><strong>Example 2:</strong> Reflect the point (3, 2) in the x-axis.</p>
        <p>The x-coordinate remains unchanged while the y-coordinate changes sign.</p>
        <p>Image = <strong>(3, -2)</strong>.</p>

        <p><strong>Example 3:</strong> What happens to a point after a 90° anticlockwise rotation about the origin?</p>
        <p>(x, y) becomes <strong>(-y, x)</strong>.</p>
    `,

    practice: `
        <h2>Practice Questions</h2>
        <ol>
            <li>Translate (1, 2) by (3, 4).</li>
            <li>Reflect (5, 3) in the x-axis.</li>
            <li>Reflect (4, -2) in the y-axis.</li>
            <li>State four types of transformation.</li>
            <li>Give the image of (2, 3) after a 90° anticlockwise rotation about the origin.</li>
        </ol>
    `,

    answers: `
        <h2>Answers</h2>
        <ol>
            <li>(4, 6)</li>
            <li>(5, -3)</li>
            <li>(-4, -2)</li>
            <li>Translation, reflection, rotation and enlargement.</li>
            <li>(-3, 2)</li>
        </ol>
    `
},

// ============================================================
// TOPIC 42: TRIGONOMETRIC IDENTITIES
// ============================================================

42: {
    title: "Trigonometric Identities",

    lesson: `
        <h2>Lesson: Trigonometric Identities</h2>
        <p>A trigonometric identity is an equation that is true for all permissible values of the variable.</p>

        <h3>Important Identity</h3>
        <p><strong>sin²θ + cos²θ = 1</strong></p>

        <p>Other useful relationships include:</p>
        <ul>
            <li>tan θ = sin θ / cos θ</li>
            <li>sin²θ = 1 - cos²θ</li>
            <li>cos²θ = 1 - sin²θ</li>
        </ul>
    `,

    examples: `
        <h2>Worked Examples</h2>

        <p><strong>Example 1:</strong> If sin θ = 3/5, find cos²θ.</p>
        <p>sin²θ + cos²θ = 1.</p>
        <p>9/25 + cos²θ = 1.</p>
        <p>cos²θ = 16/25.</p>

        <p><strong>Example 2:</strong> If sin θ = 3/5 and θ is acute, find cos θ.</p>
        <p>cos θ = <strong>4/5</strong>.</p>

        <p><strong>Example 3:</strong> If sin θ = 0.6 and cos θ = 0.8, find tan θ.</p>
        <p>tan θ = 0.6/0.8 = <strong>0.75</strong>.</p>
    `,

    practice: `
        <h2>Practice Questions</h2>
        <ol>
            <li>State the identity involving sin²θ and cos²θ.</li>
            <li>If sin θ = 3/5, find cos θ for an acute angle.</li>
            <li>If cos θ = 4/5, find sin θ for an acute angle.</li>
            <li>If sin θ = 0.5 and cos θ = √3/2, find tan θ.</li>
            <li>Write tan θ in terms of sin θ and cos θ.</li>
        </ol>
    `,

    answers: `
        <h2>Answers</h2>
        <ol>
            <li>sin²θ + cos²θ = 1</li>
            <li>4/5</li>
            <li>3/5</li>
            <li>1/√3</li>
            <li>tan θ = sin θ/cos θ</li>
        </ol>
    `
},

// ============================================================
// TOPIC 43: STATISTICAL REPRESENTATION
// ============================================================

43: {
    title: "Statistical Representation",

    lesson: `
        <h2>Lesson: Statistical Representation</h2>
        <p>Statistical data can be represented using tables and different types of graphs.</p>

        <h3>Common Representations</h3>
        <ul>
            <li>Bar charts</li>
            <li>Pie charts</li>
            <li>Histograms</li>
            <li>Frequency polygons</li>
            <li>Line graphs</li>
        </ul>

        <p>A pie chart represents data as sectors of a circle. The angle of a sector is:</p>
        <p><strong>Frequency / Total frequency × 360°</strong>.</p>
    `,

    examples: `
        <h2>Worked Examples</h2>

        <p><strong>Example 1:</strong> A class has 40 students and 10 prefer football. Find the pie-chart angle.</p>
        <p>Angle = 10/40 × 360° = <strong>90°</strong>.</p>

        <p><strong>Example 2:</strong> A category has frequency 15 out of a total of 60. Find its percentage.</p>
        <p>Percentage = 15/60 × 100 = <strong>25%</strong>.</p>

        <p><strong>Example 3:</strong> Which graph is especially suitable for continuous grouped data?</p>
        <p>A <strong>histogram</strong>.</p>
    `,

    practice: `
        <h2>Practice Questions</h2>
        <ol>
            <li>A class has 50 students and 20 like Mathematics. Find the pie-chart angle.</li>
            <li>Find the percentage represented by frequency 12 out of 48.</li>
            <li>Name a graph used for continuous grouped data.</li>
            <li>What is the total angle of a pie chart?</li>
            <li>What graph uses rectangular bars to represent frequencies?</li>
        </ol>
    `,

    answers: `
        <h2>Answers</h2>
        <ol>
            <li>144°</li>
            <li>25%</li>
            <li>Histogram</li>
            <li>360°</li>
            <li>Bar chart</li>
        </ol>
    `
},

// ============================================================
// TOPIC 44: VARIATION
// ============================================================

44: {
    title: "Variation",

    lesson: `
        <h2>Lesson: Variation</h2>
        <p>Variation describes how one quantity changes in relation to another.</p>

        <h3>Direct Variation</h3>
        <p>If y varies directly as x:</p>
        <p><strong>y = kx</strong>.</p>

        <h3>Inverse Variation</h3>
        <p>If y varies inversely as x:</p>
        <p><strong>y = k/x</strong>.</p>

        <p>k is called the constant of variation.</p>
    `,

    examples: `
        <h2>Worked Examples</h2>

        <p><strong>Example 1:</strong> y varies directly as x. If y = 12 when x = 4, find y when x = 7.</p>
        <p>12 = 4k, so k = 3.</p>
        <p>When x = 7, y = 3 × 7 = <strong>21</strong>.</p>

        <p><strong>Example 2:</strong> y varies inversely as x. If y = 6 when x = 4, find y when x = 8.</p>
        <p>yx = k.</p>
        <p>k = 6 × 4 = 24.</p>
        <p>y = 24/8 = <strong>3</strong>.</p>

        <p><strong>Example 3:</strong> If y = kx and k = 5, find y when x = 9.</p>
        <p>y = 5 × 9 = <strong>45</strong>.</p>
    `,

    practice: `
        <h2>Practice Questions</h2>
        <ol>
            <li>y varies directly as x. If y = 10 when x = 2, find k.</li>
            <li>Using the same relationship, find y when x = 7.</li>
            <li>y varies inversely as x. If y = 8 when x = 3, find k.</li>
            <li>Using the same inverse relationship, find y when x = 6.</li>
            <li>Write the formula for direct variation.</li>
        </ol>
    `,

    answers: `
        <h2>Answers</h2>
        <ol>
            <li>k = 5</li>
            <li>35</li>
            <li>k = 24</li>
            <li>4</li>
            <li>y = kx</li>
        </ol>
    `
},

// ============================================================
// TOPIC 45: REVISION AND MATHEMATICAL PROBLEM SOLVING
// ============================================================

45: {
    title: "Mathematical Problem Solving",

    lesson: `
        <h2>Lesson: Mathematical Problem Solving</h2>
        <p>Mathematical problem solving involves understanding a problem, identifying the required information, choosing an appropriate method and checking the answer.</p>

        <h3>Recommended Steps</h3>
        <ol>
            <li>Read and understand the problem.</li>
            <li>Identify the known quantities.</li>
            <li>Identify what is required.</li>
            <li>Choose the appropriate formula or method.</li>
            <li>Carry out the calculation carefully.</li>
            <li>Check that the answer is reasonable.</li>
        </ol>

        <p>Good problem solving requires clear working and correct mathematical notation.</p>
    `,

    examples: `
        <h2>Worked Examples</h2>

        <p><strong>Example 1:</strong> A student buys 5 books at ₦800 each. Find the total cost.</p>
        <p>Total = 5 × 800 = <strong>₦4,000</strong>.</p>

        <p><strong>Example 2:</strong> A rectangle has area 72 cm² and length 9 cm. Find its breadth.</p>
        <p>Area = length × breadth.</p>
        <p>72 = 9 × breadth.</p>
        <p>Breadth = <strong>8 cm</strong>.</p>

        <p><strong>Example 3:</strong> Solve 2x + 7 = 19.</p>
        <p>2x = 12.</p>
        <p>x = <strong>6</strong>.</p>
    `,

    practice: `
        <h2>Practice Questions</h2>
        <ol>
            <li>A pen costs ₦250. Find the cost of 8 pens.</li>
            <li>A rectangle has area 60 cm² and length 10 cm. Find its breadth.</li>
            <li>Solve 3x + 5 = 20.</li>
            <li>A car travels 180 km in 3 hours. Find its average speed.</li>
            <li>State three important steps in solving a mathematical problem.</li>
        </ol>
    `,

    answers: `
        <h2>Answers</h2>
        <ol>
            <li>₦2,000</li>
            <li>6 cm</li>
            <li>x = 5</li>
            <li>60 km/h</li>
            <li>Understand the problem, choose a method, calculate and check the answer.</li>
        </ol>
    `
}
