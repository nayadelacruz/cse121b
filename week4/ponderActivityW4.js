// courses.js
const aCourse = {
  code: "CSE121b",
  name: "Javascript Language",
  sections: [
    {
    sectionNum: 1,
    roomNum: 'STC 353', 
    enrolled: 26, 
    days: 'TTh', 
    instructor: 'Bro T',
  },
  {
    sectionNum: 2,
    roomNum: "STC 347",
    enrolled: 25,
    days: "TTh",
    instructor: "Sis A",
  },
],
  enrollStudent: function (sectionNum) {
    // find the right section...Array.findIndex will work here
    const sectionIndex = this.sections.findIndex(
      (section) => section.sectionNum == sectionNum
    );
    if (sectionIndex >= 0) {
      this.sections[sectionIndex].enrolled++;
      renderSections(this.sections);
    }
  },
  dropStudent: function (sectionNum) {
    // find the right section...Array.findIndex will work here
    const sectionIndex = this.sections.findIndex(
      (section) => section.sectionNum == sectionNum
    );
    if (sectionIndex >= 0) {
      this.sections[sectionIndex].enrolled--;
      renderSections(this.sections);
    }
  },
};

//Create a function to set the name and number of the course in the HTML. Pass the course object into your function//
function setCourseInf(course) {
    document.getElementById('courseName').innerHTML = course.name;
    document.getElementById('courseCode').innerHTML = course.code;
}

//Create another function that will output the sections into the table identified by #sections. You should pass the sections you want rendered into the function.//
function setTable(sections){
    const html = sections.map(
        section =>`<tr>
        <td>${section.sectionNum}</td>
        <td>${section.roomNum}</td>
        <td>${section.enroll}</td>
        <td>${section.days}</td>
        <td>${section.instructor}</td></tr>`
    );
    document.getElementById('sections').innerHTML = html.join("");
}

document.querySelector("#enrollStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.enrollStudent(sectionNum);
  });
  document.querySelector("#dropStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.dropStudent(sectionNum);
  });

setCourseInf(aCourse);
setTable(aCourse.sections);