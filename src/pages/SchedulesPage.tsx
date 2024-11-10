import React from 'react';
import DefaultLayout from '@/layouts/default';
import TeacherScheduleForm from '@/components/Forms/Schedules/TeacherScheduleForm';
import StudentScheduleForm from '@/components/Forms/Schedules/StudentScheduleForm';
import AcademicScheduleForm from '@/components/Forms/Schedules/AcademicScheduleForm';

const Schedules: React.FC = () => {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center gap-6 py-8 md:py-10">
        <h2 className="text-2xl font-semibold mb-4">Formularios de Horarios</h2>
        
        <div className="w-full max-w-lg p-6 bg-white shadow-md rounded-lg">
          <h3 className="text-xl font-medium mb-4">Horario Docente</h3>
          <TeacherScheduleForm />
        </div>
        
        <div className="w-full max-w-lg p-6 bg-white shadow-md rounded-lg">
          <h3 className="text-xl font-medium mb-4">Horario Estudiante</h3>
          <StudentScheduleForm />
        </div>
        
        <div className="w-full max-w-lg p-6 bg-white shadow-md rounded-lg">
          <h3 className="text-xl font-medium mb-4">Horario Académico</h3>
          <AcademicScheduleForm />
        </div>
      </section>
    </DefaultLayout>
  );
};

export default Schedules;
