import React, { useState, useEffect } from 'react';
import Templates from '@/app/(data)/Templates';
import TemplateCard from './TemplateCard';

export interface TEMPLATE {
    name: string,
    desc: string,
    category: string,
    icon: string,
    aiPrompt: string,
    slug: string,
    form: FORM[],
}

export interface FORM {
    label: string,
    field: string,
    name: string,
    required?: boolean
}

function TemplateListSection({ userSearchInput }: any) {
    const [templateList, setTemplateList] = useState(Templates);

    useEffect(() => {
        if (userSearchInput) {
            const filteredTemplates = Templates.filter((template) => 
                template.name.toLowerCase().includes(userSearchInput.toLowerCase())
            );
            setTemplateList(filteredTemplates);
        } else {
            setTemplateList(Templates);
        }
    }, [userSearchInput]);

    return (
        <div className='grid xs:grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5 mx-2 '>
            {templateList.map((item: TEMPLATE, index: number) => (
                <TemplateCard key={index} {...item} />
            ))}
        </div>
    );
}

export default TemplateListSection;
