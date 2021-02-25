import { reducer } from './reducer';
import { FILTER_COURSES } from '../courses/course.actions';

describe('Reducer', () => {
    it('should have the correct initial state', () => {
        const state = reducer(undefined, {});
        expect(state.courses.length).toBe(0);
        expect(state.filteredCourses.length).toBe(0);
    });
});

describe('filteredCourse', () => {
    const courses = [
        {
          "id": 1,
          "name": "Building Apps with React",
          "topic": "ReactJS"
        },
        {
          "id": 2,
          "name": "Building Apps with Angular",
          "topic": "AngularJS"
        },
        {
          "id":3,
          "name": "Building Apps with Angular and Redux",
          "topic": "Angular and Redux"
        }
    ];

    it('should filter out all course with bad search', () => {
        const state = {
            courses, filteredCourses: courses,
        }
        const adapteState = reducer(state, {
            type: FILTER_COURSES, 
            searchText: 'bad search'
        });

        expect(adapteState.courses.length).toBe(3);
        expect(adapteState.filteredCourses.length).toBe(0);
    });

    it('should match a course with right search', () => {
        const state = {
            courses, filteredCourses: courses,
        }
        const adapteState = reducer(state, {
            type: FILTER_COURSES, 
            searchText: 'redux'
        });

        expect(adapteState.courses.length).toBe(3);
        expect(adapteState.filteredCourses.length).toBe(1);
    });
});