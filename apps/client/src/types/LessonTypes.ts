import { Student } from "./StudentTypes";

export type Lesson = {
    id: string;
    name: string;
    startDate: string;
    endDate: string;
    students: Student[];
}