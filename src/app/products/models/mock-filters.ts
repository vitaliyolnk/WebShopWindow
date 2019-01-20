import { IFilterGroup } from './filter-group';

export const FILTERS: IFilterGroup[] = [{
    groupName: 'brand',
    filters: [
        { id: '1', name: 'Comanche', quantity: 45, isSelected: false },
        { id: '2', name: 'Bianchi', quantity: 35, isSelected: false  },
        { id: '3', name: 'Ranger', quantity: 30, isSelected: false  }]
},
{
    groupName: 'biketype',
    filters: [
        { id: '11', name: 'Mountain', quantity: 45, isSelected: false  },
        { id: '21', name: 'Touring', quantity: 35, isSelected: false },
        { id: '31', name: 'City', quantity: 30, isSelected: false  }]
},
{
    groupName: 'framesize',
    filters: [
        { id: '111', name: '17', quantity: 45, isSelected: false  },
        { id: '211', name: '19', quantity: 35, isSelected: false  },
        { id: '311', name: '21', quantity: 30, isSelected: false  }]
},
{
    groupName: 'wheelwize',
    filters: [
        { id: '112', name: '26', quantity: 45, isSelected: false  },
        { id: '212', name: '27', quantity: 35, isSelected: false  },
        { id: '313', name: '29', quantity: 30, isSelected: false  }]
}
];
