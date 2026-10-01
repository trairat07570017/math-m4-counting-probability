# Math Worksheet Platform: Fundamental Counting Principles (หลักการนับเบื้องต้น ม.4)

An interactive, print-ready digital instructional platform for Grade 10 mathematics teachers and students based on the IPST (สสวท.) revised curriculum 2017.

## Language

### Platform & Structure

**Worksheet (ใบงาน)**:
A single, self-contained instructional document for a specific curriculum topic containing concept definitions, worked examples, and graded practice problems printable as A4 paper.
_Avoid_: Test paper, exam sheet, quiz app

**Sub-worksheet (ใบงานย่อย)**:
A modular section of a larger topic focused on a specific problem archetype accessible through the nested sidebar menu.
_Avoid_: Chapter part, sub-page, step

**Lesson Panel (หน้าบทเรียน)**:
An independent interactive container for each curriculum topic or sub-worksheet displayed conditionally based on sidebar selection.
_Avoid_: Page, screen, view, route

**Nested Sidebar Navigation (แถบเมนูนำทางแบบลำดับชั้น)**:
An accordion-style sidebar enabling teachers and students to expand main topics and navigate directly to focused sub-worksheets.
_Avoid_: Flyout menu, nested drawer, tab bar

### Instructional Mechanics

**Worked Example (ตัวอย่างแสดงวิธีคิด)**:
A pedagogical demonstration positioned immediately before a set of practice problems to model the exact problem-solving procedure.
_Avoid_: Demo, sample question, tutorial

**Practice Problem (แบบฝึกหัดคำนวณ)**:
A curriculum-aligned mathematical exercise designed for students to solve independently with toggleable step-by-step guidance.
_Avoid_: Exam question, test item, quiz

**Solution Box (กล่องแสดงวิธีทำและคำตอบ)**:
An expandable card revealing full arithmetic breakdown and final numeric answer for self-check or grading.
_Avoid_: Spoiler, answer sheet, pop-up modal

**Student Writing Area (ช่องว่างแสดงวิธีทำ)**:
An open writing area with a bottom dotted boundary visible on printouts when solutions are hidden to allow physical pen-and-paper student responses. Features tiered vertical space scaled adaptively according to the mathematical complexity of the problem (standard 3-line calculation vs. deep multi-case breakdown).
_Avoid_: Placeholder, blank space, text input

### Curriculum Topics

**Addition Principle (หลักการบวก)**:
The rule stating that if an action can be performed in several mutually exclusive cases where each case completes the task, total outcomes equal the sum of ways in each case.
_Avoid_: Summation rule, or-rule

**Multiplication Principle (หลักการคูณ)**:
The rule stating that if a composite task consists of sequential sub-stages, total outcomes equal the product of ways across all stages.
_Avoid_: Product rule, and-rule

**Mixed Counting Problem (โจทย์ผสมหลักการบวกและคูณ)**:
A compound scenario requiring students to first partition a problem into mutually exclusive cases, then apply sequential stages within each case.
_Avoid_: Hybrid counting, multi-step problem

**Factorial (แฟกทอเรียล)**:
The product of positive integers from 1 through $n$, written as $n!$, serving as the fundamental computational operator for permutations and combinations.
_Avoid_: Exclamation mark, multiply sequence

**Linear Permutation (การเรียงสับเปลี่ยนเชิงเส้น)**:
An arrangement of distinct objects in a straight line where the specific order of elements changes the identity of the outcome.
_Avoid_: Linear arrangement, sequence order

**Bundle Method (เทคนิคมัดรวม)**:
A problem-solving strategy treating items that must remain adjacent as a single consolidated unit, multiplied by internal permutations of the unit.
_Avoid_: Grouping method, together rule

**Gap Insertion Method (เทคนิคแทรกช่องว่าง)**:
A problem-solving strategy placing unconstrained items first, then positioning mutually exclusive items into the resulting interstitial gaps.
_Avoid_: Separation method, slotting technique

**Alternating Arrangement (การเรียงสลับกันแบบคนต่อคน)**:
A linear permutation pattern where two distinct sets alternate positions sequentially, whose count of valid arrangements depends on whether set cardinalities are equal (2 global alternating patterns) or differ by 1 (1 unique global pattern).
_Avoid_: Mixed sequence, alternating slot

**Combination (การจัดหมู่)**:
The selection of $r$ objects from a set of $n$ distinct objects without regard to the order of selection, written as $C_{n,r}$ or $\binom{n}{r}$, where arrangements of identical elements are considered equivalent.
_Avoid_: Grouping, team picking, order-free arrangement

**Complement Counting Method (วิธีลบออก / การนับแบบตรงกันข้าม)**:
A technique calculating valid selections (particularly under "at least" or "at most" conditions) by subtracting the non-qualifying outcomes from total unconstrained combinations: $n(E) = n(\text{Total}) - n(E')$.
_Avoid_: Reverse counting, subtraction trick

**Geometric Counting (การนับเชิงเรขาคณิต)**:
The application of combinations to determine distinct geometric figures formed by non-collinear points, such as straight lines ($C_{n,2}$), triangles ($C_{n,3}$), or polygon diagonals ($C_{n,2} - n$).
_Avoid_: Shape counting, point connection

### Probability & Modeling

**Random Experiment (การทดลองสุ่ม)**:
An operation or process that can be repeated under identical conditions whose individual outcome cannot be predicted with certainty, but the set of all possible outcomes is fully specifiable.
_Avoid_: Trial, random test

**Sample Space (ปริภูมิตัวอย่าง)**:
The complete set of all possible outcomes resulting from a random experiment, denoted by $S$, whose total count of outcomes is $n(S)$.
_Avoid_: Outcome universe, total set

**Event (เหตุการณ์)**:
A specific subset of the sample space ($E \subseteq S$) containing the outcomes satisfying a given condition, with count denoted by $n(E)$.
_Avoid_: Result, target case

**Classical Probability (ความน่าจะเป็นตามทฤษฎีดั้งเดิม)**:
The measure of likelihood that an event $E$ occurs in a sample space $S$ with equally likely outcomes, calculated as $P(E) = \frac{n(E)}{n(S)}$ where $0 \le P(E) \le 1$.
_Avoid_: Chance ratio, likelihood percentage

**Equally Likely Assumption (ข้อตกลงผลลัพธ์ที่มีโอกาสเกิดขึ้นเท่ากัน)**:
The foundational requirement of classical probability demanding that physical objects (even when visually identical) must be distinguished (e.g. Red 1, Red 2) so that every single outcome carries equal probability weight in $S$.
_Avoid_: Uniformity rule, identical object rule

**Complementary Probability (ความน่าจะเป็นของเหตุการณ์ตรงกันข้าม)**:
The probability that event $E$ does not occur, given by $P(E') = 1 - P(E)$, frequently applied to "at least one" problems to bypass complex direct multi-case summation.
_Avoid_: Inverse probability, opposite probability

### Assessment & Exam Architecture

**Practice Test Paper (แนวข้อสอบ / แบบทดสอบประเมินผลสัมฤทธิ์)**:
A standardized 10-item evaluation instrument designed to evaluate student problem-solving fluency across specified cognitive tiers without in-line worked example scaffolding.
_Avoid_: Mock exam, quiz, contest sheet

**Cognitive Tiering (การแบ่งระดับความยากแบบขั้นบันได)**:
The three-level pedagogical classification for practice test papers:
- **Tier 1 (ฉบับพื้นฐาน - Basic)**: Direct definition verification, single-stage rules, and formula evaluation.
- **Tier 2 (ฉบับมาตรฐาน - Standard)**: Curriculum-aligned standard composite problems matching typical IPST textbook end-of-chapter exercises.
- **Tier 3 (ฉบับประยุกต์ - Advanced)**: Multi-constraint scenarios requiring simultaneous case partitioning, slot restrictions, and complement counting.

**Curated Exam Bank (คลังข้อสอบรวมมาตรฐานระดับชาติ)**:
A 50-item bank partitioned into five 10-item thematic sets categorized by examination source and target competencies:
- **Set 1 (แนว สสวท. ประยุกต์)**: Modern real-world context modeling based on the 2017 revised IPST core curriculum.
- **Set 2 (แนว O-NET ม.6 ย้อนหลัง)**: High-frequency multiple-choice and grid-in numerical items from historical national O-NET examinations.
- **Set 3 & 4 (แนว A-Level คณิต 2)**: Rigorous problem sets modeling the Applied Mathematics 2 examination for tertiary admissions.
- **Set 5 (สปีดเทสต์ & ปราบเซียน)**: Advanced competition-grade speed and precision items covering interstitial gap insertion, symmetry arguments, and modular arithmetic partitions.



