
import api from '../../services/api';

module.exports = {


    async finishTask (taskTemp) {

        await api.put(`/finishTask`, { task : taskTemp })
        .then(res => {
            console.log(res.data);
            loadTasks(status);
        }).catch(err => {
            console.log(err.response);
        });     
        
    },

    
}