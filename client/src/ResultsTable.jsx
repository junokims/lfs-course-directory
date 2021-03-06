import React from 'react'
import { Table } from 'react-bootstrap'

class ResultsTable extends React.Component {
  render() {
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Course</th>
            <th>Description</th>
            <th>Syllabus</th>
          </tr>
        </thead>
        <tbody>
          {this.props.filteredCourses.map(course => {
            const link = `https://courses.students.ubc.ca/cs/main?pname=subjarea&tname=subjareas&req=3&dept=${course.dept}&course=${course.course}`
            const syllabusLink = course.syllabus ? `${process.env.REACT_APP_CANVAS_SYLLABUS_URL}/lfssyllabi/syllabi/${course.syllabus.term}/${course.syllabus.originalCourseName}/index.html`: ''
            return (
              <tr key={course.course + course.dept + course.description + course.syllabus}>
                <th style={{ fontWeight: 'normal' }}>
                  {<a href={link}>{course.dept + ' ' + course.course}</a>}
                </th>
                <th style={{ fontWeight: 'normal' }}>
                  {course.description}
                </th>
                <th style={{ fontWeight: 'normal' }}>
                  {course.syllabus ? <a href={syllabusLink}>{course.syllabus.term}</a> : ''}
                </th>
              </tr>
            )
          })}
        </tbody>
      </Table>
    )
  }
}

export default ResultsTable
