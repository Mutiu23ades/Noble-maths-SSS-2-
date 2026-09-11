"use strict";

/*
============================================================
SSS 2 MATHEMATICS APP
45 TOPICS
BATCH 1: TOPICS 1 - 15

Each topic contains:
1. Detailed Lesson
2. Worked Examples
3. Practice Questions
4. Answers

BATCH 2 and BATCH 3 will be added later.
============================================================
*/

const topics = {

    // ========================================================
    // TOPIC 1: SURDS
    // ========================================================

    1: {
        title: "Surds",

        lesson: `
            <p>A <strong>surd</strong> is an irrational root that cannot be simplified to give a rational number.</p>

            <p>Examples include √2, √3, √5 and 2√7.</p>

            <h4>Important Rules</h4>
            <p>√a × √b = √(ab)</p>
            <p>√a ÷ √b = √(a/b)</p>
            <p>Like surds can be added or subtracted.</p>

            <p>For example:</p>
            <p>3√5 + 2√5 = 5√5</p>

            <p>To simplify a surd, look for a perfect-square factor.</p>
        `,

        examples: `
            <div class="example">
                <h4>Example 1: Simplify √72</h4>
                <p>√72 = √(36 × 2)</p>
                <p>= √36 × √2</p>
                <p>= <strong>6√2</strong></p>
            </div>

            <div class="example">
                <h4>Example 2: Simplify 3√12</h4>
                <p>3√12 = 3√(4 × 3)</p>
                <p>= 3 × 2√3</p>
                <p>= <strong>6√3</strong></p>
            </div>

            <div class="example">
                <h4>Example 3: Simplify 2√5 + 3√5 − √5</h4>
                <p>Collect the like surds:</p>
                <p>(2 + 3 − 1)√5</p>
                <p>= <strong>4√5</strong></p>
            </div>
        `,

        practice: `
            <ol>
                <li>Simplify √48.</li>
                <li>Simplify 2√18.</li>
                <li>Simplify 5√3 + 2√3 − √3.</li>
                <li>Simplify √20 + √45.</li>
                <li>Evaluate √6 × √24.</li>
            </ol>
        `,

        answers: `
            <ol>
                <li><strong>4√3</strong></li>
                <li><strong>6√2</strong></li>
                <li><strong>6√3</strong></li>
                <li><strong>5√5</strong></li>
                <li><strong>12</strong></li>
            </ol>
        `
    },


    // ========================================================
    // TOPIC 2: RATIONALIZATION OF SURDS
    // ========================================================

    2: {
        title: "Rationalization of Surds",

        lesson: `
            <p>Rationalization is the process of removing a surd from the denominator of a fraction.</p>

            <p>For example, instead of leaving <strong>1/√3</strong>, we rationalize the denominator.</p>

            <p>Multiply the numerator and denominator by the same surd:</p>

            <p>1/√3 × √3/√3 = √3/3</p>

            <p>For denominators involving two terms such as a + √b, we use the <strong>conjugate</strong>.</p>

            <p>The conjugate of a + √b is a − √b.</p>
        `,

        examples: `
            <div class="example">
                <h4>Example 1: Rationalize 1/√5</h4>
                <p>Multiply by √5/√5:</p>
                <p>1/√5 × √5/√5</p>
                <p>= √5/5</p>
                <p>Therefore, <strong>1/√5 = √5/5</strong>.</p>
            </div>

            <div class="example">
                <h4>Example 2: Rationalize 3/√2</h4>
                <p>3/√2 × √2/√2</p>
                <p>= 3√2/2</p>
                <p>Therefore, <strong>3/√2 = 3√2/2</strong>.</p>
            </div>

            <div class="example">
                <h4>Example 3: Rationalize 1/(2 + √3)</h4>
                <p>Use the conjugate 2 − √3.</p>
                <p>1/(2 + √3) × (2 − √3)/(2 − √3)</p>
                <p>= (2 − √3)/(4 − 3)</p>
                <p>= <strong>2 − √3</strong></p>
            </div>
        `,

        practice: `
            <ol>
                <li>Rationalize 1/√2.</li>
                <li>Rationalize 5/√3.</li>
                <li>Rationalize 2/√7.</li>
                <li>Rationalize 1/(3 + √2).</li>
                <li>Rationalize 4/(2 − √5).</li>
            </ol>
        `,

        answers: `
            <ol>
                <li><strong>√2/2</strong></li>
                <li><strong>5√3/3</strong></li>
                <li><strong>2√7/7</strong></li>
                <li><strong>3 − √2</strong></li>
                <li><strong>−(2 + √5)</strong></li>
            </ol>
        `
    },


    // ========================================================
    // TOPIC 3: INDICES
    // ========================================================

    3: {
        title: "Indices",

        lesson: `
            <p>Indices are powers or exponents used to show repeated multiplication.</p>

            <p>For example, 2³ means 2 × 2 × 2 = 8.</p>

            <h4>Laws of Indices</h4>
            <p>aᵐ × aⁿ = aᵐ⁺ⁿ</p>
            <p>aᵐ ÷ aⁿ = aᵐ⁻ⁿ</p>
            <p>(aᵐ)ⁿ = aᵐⁿ</p>
            <p>a⁰ = 1</p>
            <p>a⁻ⁿ = 1/aⁿ</p>
            <p>a^(1/n) = ⁿ√a</p>
        `,

        examples: `
            <div class="example">
                <h4>Example 1</h4>
                <p>Simplify 2³ × 2⁴.</p>
                <p>= 2³⁺⁴</p>
                <p>= 2⁷</p>
                <p>= <strong>128</strong></p>
            </div>

            <div class="example">
                <h4>Example 2</h4>
                <p>Simplify x⁷ ÷ x³.</p>
                <p>= x⁷⁻³</p>
                <p>= <strong>x⁴</strong></p>
            </div>

            <div class="example">
                <h4>Example 3</h4>
                <p>Simplify (3²)³.</p>
                <p>= 3⁶</p>
                <p>= <strong>729</strong></p>
            </div>
        `,

        practice: `
            <ol>
                <li>Simplify 5² × 5³.</li>
                <li>Simplify x⁹ ÷ x⁴.</li>
                <li>Simplify (2³)².</li>
                <li>Evaluate 4⁰.</li>
                <li>Write 1/3⁴ using a negative index.</li>
            </ol>
        `,

        answers: `
            <ol>
                <li><strong>5⁵ = 3125</strong></li>
                <li><strong>x⁵</strong></li>
                <li><strong>2⁶ = 64</strong></li>
                <li><strong>1</strong></li>
                <li><strong>3⁻⁴</strong></li>
            </ol>
        `
    },


    // ========================================================
    // TOPIC 4: LOGARITHMS
    // ========================================================

    4: {
        title: "Logarithms",

        lesson: `
            <p>A logarithm is another way of expressing an index.</p>

            <p>If aˣ = N, then:</p>

            <p><strong>logₐN = x</strong></p>

            <p>For example, since 2³ = 8:</p>
            <p>log₂8 = 3.</p>

            <h4>Important Laws</h4>
            <p>log(ab) = log a + log b</p>
            <p>log(a/b) = log a − log b</p>
            <p>log(aⁿ) = n log a</p>
        `,

        examples: `
            <div class="example">
                <h4>Example 1</h4>
                <p>Evaluate log₂32.</p>
                <p>Since 2⁵ = 32:</p>
                <p><strong>log₂32 = 5</strong></p>
            </div>

            <div class="example">
                <h4>Example 2</h4>
                <p>Solve log₃x = 4.</p>
                <p>Convert to index form:</p>
                <p>x = 3⁴</p>
                <p>Therefore, <strong>x = 81</strong>.</p>
            </div>

            <div class="example">
                <h4>Example 3</h4>
                <p>Simplify log 2 + log 5.</p>
                <p>= log(2 × 5)</p>
                <p>= log 10</p>
                <p>= <strong>1</strong> in base 10.</p>
            </div>
        `,

        practice: `
            <ol>
                <li>Evaluate log₂16.</li>
                <li>Evaluate log₅125.</li>
                <li>Solve log₄x = 3.</li>
                <li>Simplify log 3 + log 10.</li>
                <li>Express log(a³) in terms of log a.</li>
            </ol>
        `,

        answers: `
            <ol>
                <li><strong>4</strong></li>
                <li><strong>3</strong></li>
                <li><strong>x = 64</strong></li>
                <li><strong>log 30</strong></li>
                <li><strong>3 log a</strong></li>
            </ol>
        `
    },


    // ========================================================
    // TOPIC 5: SETS
    // ========================================================

    5: {
        title: "Sets",

        lesson: `
            <p>A set is a well-defined collection of objects.</p>

            <p>Example:</p>
            <p>A = {2, 4, 6, 8}.</p>

            <p>The objects in a set are called <strong>elements</strong>.</p>

            <h4>Important Terms</h4>
            <p><strong>Union:</strong> A ∪ B contains elements in A or B or both.</p>
            <p><strong>Intersection:</strong> A ∩ B contains elements common to A and B.</p>
            <p><strong>Empty set:</strong> A set containing no element.</p>
            <p><strong>Universal set:</strong> The set containing all objects under consideration.</p>
        `,

        examples: `
            <div class="example">
                <h4>Example 1</h4>
                <p>A = {1,2,3} and B = {3,4,5}.</p>
                <p>A ∪ B = <strong>{1,2,3,4,5}</strong></p>
            </div>

            <div class="example">
                <h4>Example 2</h4>
                <p>Using the same sets:</p>
                <p>A ∩ B = <strong>{3}</strong></p>
            </div>

            <div class="example">
                <h4>Example 3</h4>
                <p>If U = {1,2,3,4,5,6} and A = {2,4,6}, find A'.</p>
                <p>A' contains elements in U that are not in A.</p>
                <p>A' = <strong>{1,3,5}</strong></p>
            </div>
        `,

        practice: `
            <ol>
                <li>Let A={1,2,3} and B={3,4,5}. Find A∪B.</li>
                <li>Find A∩B.</li>
                <li>If U={1,2,3,4,5} and A={1,3,5}, find A'.</li>
                <li>State the meaning of A∪B.</li>
                <li>State the meaning of A∩B.</li>
            </ol>
        `,

        answers: `
            <ol>
                <li><strong>{1,2,3,4,5}</strong></li>
                <li><strong>{3}</strong></li>
                <li><strong>{2,4}</strong></li>
                <li><strong>Elements in A or B or both.</strong></li>
                <li><strong>Elements common to A and B.</strong></li>
            </ol>
        `
    },


    // ========================================================
    // TOPIC 6: VENN DIAGRAMS
    // ========================================================

    6: {
        title: "Venn Diagrams",

        lesson: `
            <p>A Venn diagram represents sets using circles inside a rectangle representing the universal set.</p>

            <p>The overlapping region represents the intersection of sets.</p>

            <p>The total number of elements in two sets is given by:</p>

            <p><strong>n(A ∪ B) = n(A) + n(B) − n(A ∩ B)</strong></p>

            <p>This formula prevents the common elements from being counted twice.</p>
        `,

        examples: `
            <div class="example">
                <h4>Example 1</h4>
                <p>In a class, 25 students study Mathematics, 18 study Physics and 10 study both. Find the number studying at least one.</p>
                <p>n(M∪P)=25+18−10</p>
                <p>= <strong>33 students</strong></p>
            </div>

            <div class="example">
                <h4>Example 2</h4>
                <p>If n(A)=30, n(B)=22 and n(A∩B)=8:</p>
                <p>n(A∪B)=30+22−8</p>
                <p>= <strong>44</strong></p>
            </div>

            <div class="example">
                <h4>Example 3</h4>
                <p>A class has 40 students. If 28 like football, 20 like basketball and 12 like both, find those who like neither.</p>
                <p>At least one = 28+20−12 = 36.</p>
                <p>Neither = 40−36 = <strong>4</strong>.</p>
            </div>
        `,

        practice: `
            <ol>
                <li>n(A)=35, n(B)=24 and n(A∩B)=9. Find n(A∪B).</li>
                <li>A class has 50 students. 30 like Mathematics, 25 like Physics and 15 like both. How many like at least one?</li>
                <li>Using Question 2, how many like neither subject?</li>
                <li>What does the overlapping part of two circles represent?</li>
                <li>State the formula for n(A∪B).</li>
            </ol>
        `,

        answers: `
            <ol>
                <li><strong>50</strong></li>
                <li><strong>40</strong></li>
                <li><strong>10</strong></li>
                <li><strong>A∩B</strong></li>
                <li><strong>n(A)+n(B)−n(A∩B)</strong></li>
            </ol>
        `
    },


    // ========================================================
    // TOPIC 7: ALGEBRAIC EXPRESSIONS
    // ========================================================

    7: {
        title: "Algebraic Expressions",

        lesson: `
            <p>An algebraic expression contains numbers, variables and mathematical operations.</p>

            <p>Examples include 3x+5, 2a²−4a+7 and 5xy.</p>

            <p>Like terms have the same variables raised to the same powers.</p>

            <p>Only like terms can be collected together.</p>
        `,

        examples: `
            <div class="example">
                <h4>Example 1</h4>
                <p>Simplify 3x + 5x − 2x.</p>
                <p>=(3+5−2)x</p>
                <p>= <strong>6x</strong></p>
            </div>

            <div class="example">
                <h4>Example 2</h4>
                <p>Simplify 4a + 3b − 2a + b.</p>
                <p>=(4a−2a)+(3b+b)</p>
                <p>= <strong>2a+4b</strong></p>
            </div>

            <div class="example">
                <h4>Example 3</h4>
                <p>If x=3, evaluate 2x²−x+4.</p>
                <p>=2(3²)−3+4</p>
                <p>=18−3+4</p>
                <p>= <strong>19</strong></p>
            </div>
        `,

        practice: `
            <ol>
                <li>Simplify 7x+3x−4x.</li>
                <li>Simplify 5a+2b−3a+b.</li>
                <li>Evaluate 3x+7 when x=4.</li>
                <li>Evaluate x²+2x when x=5.</li>
                <li>Identify the like terms in 3x, 5y, −2x and 7.</li>
            </ol>
        `,

        answers: `
            <ol>
                <li><strong>6x</strong></li>
                <li><strong>2a+3b</strong></li>
                <li><strong>19</strong></li>
                <li><strong>35</strong></li>
                <li><strong>3x and −2x</strong></li>
            </ol>
        `
    },


    // ========================================================
    // TOPIC 8: EXPANSION OF ALGEBRAIC EXPRESSIONS
    // ========================================================

    8: {
        title: "Expansion of Algebraic Expressions",

        lesson: `
            <p>Expansion removes brackets by multiplying each term inside the bracket by the term outside.</p>

            <p>The distributive law states:</p>

            <p><strong>a(b+c)=ab+ac</strong></p>

            <p>Important identities include:</p>
            <p>(a+b)² = a²+2ab+b²</p>
            <p>(a−b)² = a²−2ab+b²</p>
            <p>(a+b)(a−b)=a²−b²</p>
        `,

        examples: `
            <div class="example">
                <h4>Example 1</h4>
                <p>Expand 3(x+4).</p>
                <p>=3x+12</p>
                <p>Therefore, <strong>3x+12</strong>.</p>
            </div>

            <div class="example">
                <h4>Example 2</h4>
                <p>Expand (x+5)².</p>
                <p>=x²+2(x)(5)+25</p>
                <p>= <strong>x²+10x+25</strong></p>
            </div>

            <div class="example">
                <h4>Example 3</h4>
                <p>Expand (x+3)(x−2).</p>
                <p>=x²−2x+3x−6</p>
                <p>= <strong>x²+x−6</strong></p>
            </div>
        `,

        practice: `
            <ol>
                <li>Expand 4(x+3).</li>
                <li>Expand 2(3x−5).</li>
                <li>Expand (x+4)².</li>
                <li>Expand (x−3)².</li>
                <li>Expand (x+5)(x−2).</li>
            </ol>
        `,

        answers: `
            <ol>
                <li><strong>4x+12</strong></li>
                <li><strong>6x−10</strong></li>
                <li><strong>x²+8x+16</strong></li>
                <li><strong>x²−6x+9</strong></li>
                <li><strong>x²+3x−10</strong></li>
            </ol>
        `
    },


    // ========================================================
    // TOPIC 9: FACTORIZATION
    // ========================================================

    9: {
        title: "Factorization",

        lesson: `
            <p>Factorization is the process of expressing an algebraic expression as a product of simpler factors.</p>

            <p>Common methods include:</p>
            <ul>
                <li>Taking out the common factor</li>
                <li>Grouping</li>
                <li>Difference of two squares</li>
                <li>Factorizing quadratic expressions</li>
            </ul>
        `,

        examples: `
            <div class="example">
                <h4>Example 1</h4>
                <p>Factorize 6x+12.</p>
                <p>The common factor is 6.</p>
                <p>= <strong>6(x+2)</strong></p>
            </div>

            <div class="example">
                <h4>Example 2</h4>
                <p>Factorize x²−9.</p>
                <p>This is a difference of two squares:</p>
                <p>x²−3²=(x−3)(x+3)</p>
                <p>Answer: <strong>(x−3)(x+3)</strong></p>
            </div>

            <div class="example">
                <h4>Example 3</h4>
                <p>Factorize x²+5x+6.</p>
                <p>Find two numbers whose product is 6 and sum is 5.</p>
                <p>They are 2 and 3.</p>
                <p>Therefore:</p>
                <p><strong>(x+2)(x+3)</strong></p>
            </div>
        `,

        practice: `
            <ol>
                <li>Factorize 8x+16.</li>
                <li>Factorize x²−16.</li>
                <li>Factorize x²+7x+12.</li>
                <li>Factorize x²−5x+6.</li>
                <li>Factorize 3x²+6x.</li>
            </ol>
        `,

        answers: `
            <ol>
                <li><strong>8(x+2)</strong></li>
                <li><strong>(x−4)(x+4)</strong></li>
                <li><strong>(x+3)(x+4)</strong></li>
                <li><strong>(x−2)(x−3)</strong></li>
                <li><strong>3x(x+2)</strong></li>
            </ol>
        `
    },


    // ========================================================
    // TOPIC 10: LINEAR EQUATIONS
    // ========================================================

    10: {
        title: "Linear Equations",

        lesson: `
            <p>A linear equation is an equation in which the highest power of the variable is 1.</p>

            <p>Examples include:</p>
            <p>2x+5=13</p>
            <p>5x−7=18</p>

            <p>To solve an equation, perform the same operation on both sides until the variable is isolated.</p>
        `,

        examples: `
            <div class="example">
                <h4>Example 1</h4>
                <p>Solve 3x+5=20.</p>
                <p>3x=20−5</p>
                <p>3x=15</p>
                <p>x=<strong>5</strong></p>
            </div>

            <div class="example">
                <h4>Example 2</h4>
                <p>Solve 5x−7=18.</p>
                <p>5x=25</p>
                <p>x=<strong>5</strong></p>
            </div>

            <div class="example">
                <h4>Example 3</h4>
                <p>Solve 2(x+3)=14.</p>
                <p>x+3=7</p>
                <p>x=<strong>4</strong></p>
            </div>
        `,

        practice: `
            <ol>
                <li>Solve 2x+7=17.</li>
                <li>Solve 4x−9=15.</li>
                <li>Solve 3(x+2)=18.</li>
                <li>Solve 5x+3=28.</li>
                <li>Solve 7x−14=35.</li>
            </ol>
        `,

        answers: `
            <ol>
                <li><strong>x=5</strong></li>
                <li><strong>x=6</strong></li>
                <li><strong>x=4</strong></li>
                <li><strong>x=5</strong></li>
                <li><strong>x=7</strong></li>
            </ol>
        `
    },


    // ========================================================
    // TOPIC 11: LINEAR INEQUALITIES
    // ========================================================

    11: {
        title: "Linear Inequalities",

        lesson: `
            <p>An inequality compares two quantities using symbols such as &lt;, &gt;, ≤ and ≥.</p>

            <p>The important rule is that when an inequality is multiplied or divided by a negative number, the inequality sign reverses.</p>

            <p>For example:</p>
            <p>−2x &gt; 6</p>
            <p>Dividing by −2 gives:</p>
            <p>x &lt; −3.</p>
        `,

        examples: `
            <div class="example">
                <h4>Example 1</h4>
                <p>Solve x+4&gt;9.</p>
                <p>x&gt;9−4</p>
                <p>Therefore, <strong>x&gt;5</strong>.</p>
            </div>

            <div class="example">
                <h4>Example 2</h4>
                <p>Solve 3x≤12.</p>
                <p>x≤4</p>
                <p>Therefore, <strong>x≤4</strong>.</p>
            </div>

            <div class="example">
                <h4>Example 3</h4>
                <p>Solve −2x&gt;8.</p>
                <p>Divide by −2 and reverse the sign:</p>
                <p><strong>x&lt;−4</strong></p>
            </div>
        `,

        practice: `
            <ol>
                <li>Solve x+3&gt;10.</li>
                <li>Solve 2x≤14.</li>
                <li>Solve 5x−2≥18.</li>
                <li>Solve −3x&gt;12.</li>
                <li>Solve 4−x≤1.</li>
            </ol>
        `,

        answers: `
            <ol>
                <li><strong>x&gt;7</strong></li>
                <li><strong>x≤7</strong></li>
                <li><strong>x≥4</strong></li>
                <li><strong>x&lt;−4</strong></li>
                <li><strong>x≥3</strong></li>
            </ol>
        `
    },


    // ========================================================
    // TOPIC 12: SIMULTANEOUS LINEAR EQUATIONS
    // ========================================================

    12: {
        title: "Simultaneous Linear Equations",

        lesson: `
            <p>Simultaneous equations are two or more equations involving the same unknowns.</p>

            <p>The main methods are:</p>
            <ul>
                <li>Elimination method</li>
                <li>Substitution method</li>
                <li>Graphical method</li>
            </ul>

            <p>The solution must satisfy all the equations at the same time.</p>
        `,

        examples: `
            <div class="example">
                <h4>Example 1: Elimination</h4>
                <p>Solve:</p>
                <p>x+y=7</p>
                <p>x−y=1</p>

                <p>Add the equations:</p>
                <p>2x=8</p>
                <p>x=4</p>

                <p>Substitute into x+y=7:</p>
                <p>4+y=7</p>
                <p>y=<strong>3</strong></p>
            </div>

            <div class="example">
                <h4>Example 2</h4>
                <p>Solve:</p>
                <p>2x+y=9</p>
                <p>x+y=6</p>

                <p>Subtract the second equation from the first:</p>
                <p>x=3</p>

                <p>3+y=6</p>
                <p>y=<strong>3</strong></p>
            </div>

            <div class="example">
                <h4>Example 3</h4>
                <p>Solve:</p>
                <p>x+2y=11</p>
                <p>x+y=7</p>

                <p>Subtract:</p>
                <p>y=4</p>

                <p>x+4=7</p>
                <p>x=<strong>3</strong></p>
            </div>
        `,

        practice: `
            <ol>
                <li>Solve x+y=10 and x−y=2.</li>
                <li>Solve 2x+y=11 and x+y=7.</li>
                <li>Solve x+2y=13 and x+y=8.</li>
                <li>Solve 3x+y=14 and x+y=6.</li>
                <li>Solve 2x+y=12 and x−y=3.</li>
            </ol>
        `,

        answers: `
            <ol>
                <li><strong>x=6, y=4</strong></li>
                <li><strong>x=4, y=3</strong></li>
                <li><strong>x=3, y=5</strong></li>
                <li><strong>x=4, y=2</strong></li>
                <li><strong>x=5, y=2</strong></li>
            </ol>
        `
    },


    // ========================================================
    // TOPIC 13: QUADRATIC EQUATIONS
    // ========================================================

    13: {
        title: "Quadratic Equations",

        lesson: `
            <p>A quadratic equation is an equation of the form:</p>

            <p><strong>ax²+bx+c=0</strong>, where a ≠ 0.</p>

            <p>Quadratic equations can be solved by:</p>
            <ul>
                <li>Factorization</li>
                <li>Completing the square</li>
                <li>Quadratic formula</li>
            </ul>
        `,

        examples: `
            <div class="example">
                <h4>Example 1: Factorization</h4>
                <p>Solve x²−5x+6=0.</p>
                <p>(x−2)(x−3)=0</p>
                <p>Therefore:</p>
                <p>x=2 or x=3.</p>
                <p><strong>Answer: x=2, 3</strong></p>
            </div>

            <div class="example">
                <h4>Example 2</h4>
                <p>Solve x²+7x+12=0.</p>
                <p>(x+3)(x+4)=0</p>
                <p>Therefore:</p>
                <p><strong>x=−3 or x=−4</strong></p>
            </div>

            <div class="example">
                <h4>Example 3</h4>
                <p>Solve x²−9=0.</p>
                <p>(x−3)(x+3)=0</p>
                <p>Therefore:</p>
                <p><strong>x=3 or x=−3</strong></p>
            </div>
        `,

        practice: `
            <ol>
                <li>Solve x²−7x+12=0.</li>
                <li>Solve x²+5x+6=0.</li>
                <li>Solve x²−x−6=0.</li>
                <li>Solve x²−16=0.</li>
                <li>Solve x²+9x+20=0.</li>
            </ol>
        `,

        answers: `
            <ol>
                <li><strong>x=3 or 4</strong></li>
                <li><strong>x=−2 or −3</strong></li>
                <li><strong>x=3 or −2</strong></li>
                <li><strong>x=4 or −4</strong></li>
                <li><strong>x=−4 or −5</strong></li>
            </ol>
        `
    },


    // ========================================================
    // TOPIC 14: QUADRATIC FORMULA
    // ========================================================

    14: {
        title: "Quadratic Formula",

        lesson: `
            <p>The quadratic formula is used to solve equations of the form:</p>

            <p><strong>ax²+bx+c=0</strong></p>

            <p>The formula is:</p>

            <p><strong>x = (−b ± √(b²−4ac))/(2a)</strong></p>

            <p>The expression b²−4ac is called the discriminant.</p>
        `,

        examples: `
            <div class="example">
                <h4>Example 1</h4>
                <p>Solve x²−5x+6=0 using the formula.</p>

                <p>a=1, b=−5, c=6</p>

                <p>x=[5 ± √(25−24)]/2</p>

                <p>x=(5±1)/2</p>

                <p>Therefore:</p>
                <p><strong>x=3 or x=2</strong></p>
            </div>

            <div class="example">
                <h4>Example 2</h4>
                <p>Solve x²+2x−8=0.</p>

                <p>a=1, b=2, c=−8</p>

                <p>x=[−2 ± √(4+32)]/2</p>

                <p>x=[−2 ± 6]/2</p>

                <p><strong>x=2 or x=−4</strong></p>
            </div>

            <div class="example">
                <h4>Example 3</h4>
                <p>Solve 2x²−3x−2=0.</p>

                <p>a=2, b=−3, c=−2</p>

                <p>x=[3 ± √(9+16)]/4</p>

                <p>x=(3±5)/4</p>

                <p><strong>x=2 or x=−1/2</strong></p>
            </div>
        `,

        practice: `
            <ol>
                <li>Solve x²−7x+10=0 using the quadratic formula.</li>
                <li>Solve x²+3x−10=0.</li>
                <li>Solve 2x²+x−3=0.</li>
                <li>Solve x²−4x−5=0.</li>
                <li>Solve 3x²−5x−2=0.</li>
            </ol>
        `,

        answers: `
            <ol>
                <li><strong>x=5 or 2</strong></li>
                <li><strong>x=2 or −5</strong></li>
                <li><strong>x=1 or −3/2</strong></li>
                <li><strong>x=5 or −1</strong></li>
                <li><strong>x=2 or −1/3</strong></li>
            </ol>
        `
    },


    // ========================================================
    // TOPIC 15: COMPLETING THE SQUARE
    // ========================================================

    15: {
        title: "Completing the Square",

        lesson: `
            <p>Completing the square is a method of rewriting a quadratic expression in the form:</p>

            <p><strong>(x+a)²+b</strong></p>

            <p>It is useful for solving quadratic equations, finding turning points and deriving the quadratic formula.</p>

            <p>For:</p>

            <p>x²+bx</p>

            <p>take half of b, square it, and add and subtract the result.</p>
        `,

        examples: `
            <div class="example">
                <h4>Example 1</h4>
                <p>Express x²+6x+5 in completed-square form.</p>

                <p>Half of 6 is 3.</p>

                <p>x²+6x+5</p>
                <p>=(x+3)²−9+5</p>
                <p>= <strong>(x+3)²−4</strong></p>
            </div>

            <div class="example">
                <h4>Example 2</h4>
                <p>Express x²−8x+7 in completed-square form.</p>

                <p>Half of −8 is −4.</p>

                <p>x²−8x+7</p>
                <p>=(x−4)²−16+7</p>
                <p>= <strong>(x−4)²−9</strong></p>
            </div>

            <div class="example">
                <h4>Example 3: Solving an equation</h4>
                <p>Solve x²+6x+5=0.</p>

                <p>(x+3)²−4=0</p>

                <p>(x+3)²=4</p>

                <p>x+3=±2</p>

                <p>Therefore:</p>
                <p><strong>x=−1 or x=−5</strong></p>
            </div>
        `,

        practice: `
            <ol>
                <li>Express x²+4x+1 in completed-square form.</li>
                <li>Express x²−10x+3 in completed-square form.</li>
                <li>Express x²+8x+12 in completed-square form.</li>
                <li>Solve x²+4x−5=0 by completing the square.</li>
                <li>Solve x²−6x+5=0 by completing the square.</li>
            </ol>
        `,

        answers: `
            <ol>
                <li><strong>(x+2)²−3</strong></li>
                <li><strong>(x−5)²−22</strong></li>
                <li><strong>(x+4)²−4</strong></li>
                <li><strong>x=1 or x=−5</strong></li>
                <li><strong>x=1 or x=5</strong></li>
            </ol>
        `
    }

};


/* ============================================================
   APP DISPLAY FUNCTIONS
   ============================================================ */

const topicsList = document.getElementById("topicsList");
const lessonSection = document.getElementById("lessonSection");
const topicsSection = document.getElementById("topicsSection");
const welcomeSection = document.getElementById("welcomeSection");

function startLearning() {
    if (welcomeSection) welcomeSection.style.display = "none";
    if (topicsSection) topicsSection.style.display = "block";
    if (lessonSection) lessonSection.style.display = "none";

    displayTopics();
}

function displayTopics() {
    if (!topicsList) return;

    topicsList.innerHTML = "";

    Object.keys(topics).forEach(function(number) {

        const topic = topics[number];

        const button = document.createElement("button");

        button.className = "topic";
        button.type = "button";
        button.textContent = number + ". " + topic.title;

        button.onclick = function() {
            showLesson(number);
        };

        topicsList.appendChild(button);
    });
}

function showLesson(number) {

    const topic = topics[number];

    if (!topic) return;

    if (welcomeSection) welcomeSection.style.display = "none";
    if (topicsSection) topicsSection.style.display = "none";
    if (lessonSection) lessonSection.style.display = "block";

    document.getElementById("lessonTitle").textContent =
        "Topic " + number + ": " + topic.title;

    document.getElementById("lessonText").innerHTML =
        topic.lesson;

    document.getElementById("exampleText").innerHTML =
        topic.examples;

    document.getElementById("practiceText").innerHTML =
        topic.practice;

    document.getElementById("answerText").innerHTML =
        topic.answers;

    window.scrollTo(0, 0);
}

function showTopics() {

    if (welcomeSection) welcomeSection.style.display = "none";
    if (topicsSection) topicsSection.style.display = "block";
    if (lessonSection) lessonSection.style.display = "none";

    displayTopics();

    window.scrollTo(0, 0);
}

function showWelcome() {

    if (welcomeSection) welcomeSection.style.display = "block";
    if (topicsSection) topicsSection.style.display = "none";
    if (lessonSection) lessonSection.style.display = "none";

    window.scrollTo(0, 0);
}


/* ============================================================
   INITIAL STATE
   ============================================================ */

if (topicsSection) topicsSection.style.display = "none";
if (lessonSection) lessonSection.style.display = "none";
if (welcomeSection) welcomeSection.style.display = "block";

const startButton = document.getElementById("startLearningBtn");

if (startButton) {
    startButton.addEventListener("click", startLearning);
}

const backToWelcomeButton =
    document.getElementById("backToWelcomeBtn");

if (backToWelcomeButton) {
    backToWelcomeButton.addEventListener("click", showWelcome);
}

const backButtons =
    document.querySelectorAll(".backButton");

backButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        if (lessonSection &&
            lessonSection.style.display === "block") {

            showTopics();

        } else {

            showWelcome();

        }

    });

});
