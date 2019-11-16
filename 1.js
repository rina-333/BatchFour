
const BiodataAsli = () => {
  var n = ("Gusrinawati");
  umur = 25;
      return {
      'name'       : n,
      'age'        : umur,
      'address'    : 'Padang',
      'hobbies'    : ['Travelling', 'Game', 'drawing'],
      'is_married' : false,
      'list_school': [
                          {
                           name     : 'Universitas Putra Indonesia',
                           year_in  : 2012,
                           year_out : 2016,
                           major    : 'Sistem Informasi'
                          },

                          {
                           name     : 'SMA 1 PGRI Padang',
                           year_in  : 2009,
                           year_out : 2012,
                           major    : 'IPS'
                          },

                          {
                           name     : 'SMPN 3 Padang',
                           year_in  : 2006,
                           year_out : 2009,
                           major    : null
                          },

                          {
                           name     : 'SDN 14 Kampung Pondok',
                           year_in  : 2002,
                           year_out : 2006,
                           major    : null
                           }
                      ],
        'skills' :  [
                        {
                            skill_name : 'Public Speaking',
                            level      : 'advanced'
                        },

                        {
                            skill_name : 'Web Design',
                            level      : 'advanced'
                        },

                        {
                            skill_name : 'English',
                            level      : 'advanced'
                        },
                      
                    ],
        'interest_in_coding' : true
            }
                          };

console.log(BiodataAsli());
