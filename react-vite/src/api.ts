

export const api = {

    CarregarTodosUsuarios: async () => {
        let response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        let json = await response.json();
        return json;
    },

    //  CarregarTodosUsuarios: async () => {
    //      let response = await fetch('https://jsonplaceholder.typicode.com/todos/');
    //      let json = await response.json();
    //      return json;
    //  },
     AdicionarUsuarios: async (title: string, body: string, userId: number) => {
     let response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify
        ({
            title,
            body,
            userID: 1
        }),
        headers: {
            "Content-Type" : "application/json"
        }    

     });

     let json =await response.json();
     console.log(json);
     return json;
    }
};
