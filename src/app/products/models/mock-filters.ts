import { IFilterGroup } from './filter-group';

export const FILTERS: IFilterGroup[] = [{
    group: 'brand',
    items: [
        { id: '1', name: 'Comanche', isSelected: false },
        { id: '2', name: 'Bianchi',  isSelected: false  },
        { id: '3', name: 'Ranger',  isSelected: false  }]
},
{
    group: 'biketype',
    items: [
        { id: '11', name: 'Mountain', isSelected: false  },
        { id: '21', name: 'Touring',  isSelected: false },
        { id: '31', name: 'City',  isSelected: false  }]
},
{
    group: 'framesize',
    items: [
        { id: '111', name: '17',  isSelected: false  },
        { id: '211', name: '19',  isSelected: false  },
        { id: '311', name: '21',  isSelected: false  }]
},
{
    group: 'wheelwize',
    items: [
        { id: '112', name: '26',  isSelected: false  },
        { id: '212', name: '27', isSelected: false  },
        { id: '313', name: '29', isSelected: false  }]
}
];
