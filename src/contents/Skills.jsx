import SkillBox from '../components/SkillBox';
import Title from '../components/Title';
import { skillsApi } from '../assets/data/skill';

const Skills = () => {
    return (
        <section id='skills' className='w-full py-16 md:py-20 px-10 lg:px-20'>
            <Title title="Skills" />
            <div className='w-full mt-8 grid grid-cols-3 xs:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 justify-items-start gap-y-8 gap-x-4'>
                {skillsApi.map((val) => <SkillBox Component={val.icon.type} name={val.name} key={val.id} />)}
            </div>

        </section>
    )
}

export default Skills