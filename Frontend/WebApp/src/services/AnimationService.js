const baseUrl = 'http://localhost:5063';

export const getAnimation = async () => {
    const response = await fetch(`${baseUrl}/animation`);
    if(!response.ok){
         throw new Error('HTTP error ' + response.status);
    }
    const data = await response.json();
    return data;
}


export const postAnimation = async (animationData) => {
    const response = await fetch(`${baseUrl}/animation` ,{
        method: 'POST',
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(animationData)
    });
    if(!response.ok){
        throw new Error('HTTP error ' + response.status);
    }
}

export const putAnimation = async (id, animationData) => {
    const response = await fetch(`${baseUrl}/animation/${id}` ,{
        method: 'PUT',
         headers: {
           'Content-Type': "application/json"
        },
        body: JSON.stringify(animationData)
    });
    if(!response.ok){
        throw new Error('HTTP error ' + response.status);
    }
}



export const deleteAnimation = async (id) => {
    const response = await fetch(`${baseUrl}/animation/${id}` ,{
        method: 'DELETE'
    });
    if(!response.ok){
         throw new Error('HTTP error ' + response.status);
     }
}

