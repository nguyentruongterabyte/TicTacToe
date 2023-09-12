"use strict"
var student = {}

Object.defineProperty( student, "fullName", {
  value: 'Nguyen Van A', 
  writable: false
})

// student.fullName = 'Nguyen Van B'

console.log(student)


