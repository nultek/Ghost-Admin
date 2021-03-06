import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({

    activate(model) {
        let url = `${this.buildURL('theme', model.get('id'))}activate/`;

        return this.ajax(url, 'PUT', {data: {}}).then((data) => {
            return this.store.pushPayload(data);
        });
    }

});
