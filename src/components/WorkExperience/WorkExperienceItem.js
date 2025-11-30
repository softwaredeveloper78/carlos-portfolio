import { motion } from "framer-motion";
import "../../styles/WorkExperience.css";

const WorkExperienceItem = ({ title, description, date, tech, gitlink, site, image }) => {
    const fade = {
        opacity: 1,
        transition: {
            duration: 1.4,
        },
    };

    return (
        <div className="work-experience-item">
            <motion.div
              className="work-experience-item-header"
              initial={{ opacity: 0 }}
              whileInView={fade}
            >
                <div className="work-experience-item-header-title">{title}</div>
                <div className="work-experience-item-header-date">{date}</div>
            </motion.div>
            
            <motion.div
              className="work-experience-item-content"
              initial={{ opacity: 0 }}
              whileInView={fade}
            >{description.map(row => (<p>{row}</p>))}</motion.div>
          </div>
    );
}

export default WorkExperienceItem;