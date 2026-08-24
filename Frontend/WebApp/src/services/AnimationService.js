const baseUrl = 'http://localhost:5063/api';

export const getAnimation = async () => {
    const response = await fetch(`${baseUrl}/Animation`);
    if(!response.ok){
         throw new Error('HTTP error ' + response.status);
    }
    const data = await response.json();
    return data;
}

export const postAnimation = async (animationData) => {
    const response = await fetch(`${baseUrl}/Animation` ,{
        method: 'POST',
        headers: {
             'Content-Type': 'application/json'
        },
        body: JSON.stringify(animationData)
    });
    if(!response.ok){
        throw new Error('HTTP error ' + response.status);
    }
}

export const putAnimation = async (id, animationData) => {
    const response = await fetch(`${baseUrl}/Animation/${id}` ,{
        method: 'PUT',
         headers: {
           'Content-Type': 'application/json'
        },
        body: JSON.stringify(animationData)
    });
    if(!response.ok){
        throw new Error('HTTP error ' + response.status);
    }
}

export const deleteAnimation = async (id) => {
    const response = await fetch(`${baseUrl}/Animation/${id}` ,{
        method: 'DELETE'
    });
    if(!response.ok){
         throw new Error('HTTP error ' + response.status);
     }
}