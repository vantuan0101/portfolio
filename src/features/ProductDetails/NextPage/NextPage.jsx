import React from 'react';
import { Link } from 'react-router-dom';
import style from './next.module.scss';
import { Trans } from 'react-i18next';

const NextPage = ({bgColor , nameNextProject , linkProject}) => {
    return (
        <section className={style.next__project}
        style={{backgroundColor : `${bgColor}`}}
        >
            <p>
                <Trans>Next project</Trans>
               </p>
            <h2>
                <Link to={`/project/${linkProject}`} className={style.link}>
                    {nameNextProject}
                </Link>
            </h2>
                <div className={style.image}>
                    <img src="https://www.nghiatran.info/projects/vivo/img1-vivo.jpg" alt="" />
                </div>
        </section>
    );
};

export default NextPage;
