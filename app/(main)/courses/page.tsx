import { getCourses, getUserProgress } from "@/db/queries";
import { List } from "./list";
import { NoData } from "./no_data";

const CoursesPage = async () => {
    const coursesData =  getCourses();
    const userProgressData =  getUserProgress();

    const [
        courses,
        userProgress,
    ] = await Promise.all([
        coursesData,
        userProgressData,
    ]);

    const internationalCourses = courses.filter(course => course.type === 'INTERNATIONAL');
    const nativeCourses = courses.filter(course => course.type === 'NATIVE');

    return(
        // <div className="h-full max-w-[912px] px-3 mx-auto">
        //     <h1 className="text-2xl font-bold text-neutral-700">
        //     Language Courses
        //     </h1>  
        //     <List
        //     courses={courses}
        //     activeCourseId={userProgress?.activeCourseId} />
        // </div>
        <div className="h-full max-w-[912px] px-3 mx-auto">
        <h1 className="text-2xl font-bold text-neutral-700">
            International Language Courses
        </h1>
        <List
            courses={internationalCourses}
            activeCourseId={userProgress?.activeCourseId}
        />
        <h1 className="text-2xl font-bold text-neutral-700 pt-5">
            Native Language Courses
        </h1>
        <List
            courses={nativeCourses}
            activeCourseId={userProgress?.activeCourseId}
        />
    </div>
    );
};

export default CoursesPage;