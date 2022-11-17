export  function Seo(data = {}) {
    data.title = data.title || 'EduTechInfo';
    data.metaDescription = data.metaDescription || 'edutechinfo,How to start web devlopment,daily life tips and tricks';

    document.title = data.title.slice(0,30);
    document.querySelector('meta[name="description"]').setAttribute('content', data.metaDescription);
    }