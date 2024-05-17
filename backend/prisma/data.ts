

export const level = [
  { type: 'المستوى الأول' },
  { type: 'المستوى الثاني' },
  { type: 'المستوى الثالث' }
];

export const questions = [
  {
    question: 'ما معنى لغات الحب الخمس؟',
    levelId: 1,
    isActive: true,
    adminId: 1,
    imageUrl: '',
    answers : [{
      answer: 'التعبير عن الحب بلغات أخرى مثل الفرنسية مثلا',
      isTrue: false
    },
    {
      answer: 'الأشخاص الذين نعبر عن حبنا لهم كالصديق والوالدين والزوج/الزوجة',
      isTrue: false
    },
    {
      answer: 'الطرق التي نعبر بها عن الحب كالهدايا والكلمات وغيرها ',
      isTrue: true
    },
    {
      answer: 'الأوقات والأماكن التي نعبر فيها عن الحب',
      isTrue: false
    }]
  },
  {
    question:'حسب الكتاب، كم عدد الطرق التي  يمكن بها التعبير عن الحب؟',
    imageUrl: '',
    levelId: 1,
    isActive: true,
    adminId: 1,
    answers : [{
      answer: 'أربع طرق',
      isTrue: false
    },
    {
      answer: 'خمس طرق ',
      isTrue: true
    },
    {
      answer: 'سبعة طرق',
      isTrue: false
    },
    {
      answer: 'طريقة واحدة',
      isTrue: false
    }]
  },
  {
    question:
      'أي من هذه الاقتراحات لــيــســت من لغات الحب الخمس؟',
    imageUrl: '',
    levelId: 1,
    isActive: true,
    adminId: 1,
    answers : [
      {
        answer: 'تقديم الخدمات',
        isTrue: false
      },
      {
        answer: 'اعطاء الهدايا ',
        isTrue: false
      },
      {
        answer: 'ترك الشخص وحيدا لفترة ',
        isTrue: true
      },
      {
        answer: 'القاء كلمات التشجيع والشكر',
        isTrue: false
      }
    ]
  },
  {
    question:' وفقًا لغاري تشابمان، ما هو مفتاح العلاقة الناجحة؟',
    imageUrl: '',
    levelId: 1,
    isActive: true,
    adminId: 1,
    answers : [
      {
        answer: 'أن يكون لديك نفس لغة الحب التي لدى شريكك.',
        isTrue: false
      },
      {
        answer: 'فهم لغة حب شريكك والتحدث بها',
        isTrue: true
      },
      {
        answer: 'مفاجأة شريكك باستمرار بالهدايا',
        isTrue: false
      },
      {
        answer: 'تجاهل المشكلات التي يعاني منها',
        isTrue: false
      }
    ]
  },
  {
    question:'ما الذي يُرجح أن يجعل شخصًا لديه لغة حب "كلمات التشجيع" يشعر بالتقدير؟',
    imageUrl: '',
    levelId: 1,
    isActive: true,
    adminId: 1,
    answers : [{
      answer: 'تلقي هدية مدروسة',
      isTrue: false
    },
    {
      answer: 'قضاء وقت ممتع بالقيام بالأشياء التي يحبها',
      isTrue: false
    },
    {
      answer: 'سماع المديح والتعبير عن الحب',
      isTrue: true
    },
    {
      answer: 'أن يقوم شريكه بأعمال المنزل',
      isTrue: false
    }]
  },
  {
    question:'شخص تٌعد "أفعال الخدمة" لغة حبه الأساسية، قد يشعر بالحب أكثر عندما يقوم شريكه بما يلي',
    imageUrl: '',
    levelId: 1,
    isActive: true,
    adminId: 1,
    answers : [{
      answer: 'يكتب له قصيدة صادقة',
      isTrue: false
    },
    {
      answer: 'يقوم بتدليكه بعد يوم طويل',
      isTrue: false
    },
    {
      answer: 'يأخذ زمام المبادرة في القيام بالمهام دون أن يُطلب منه',
      isTrue: true
    },
    {
      answer: 'يفاجئه بتقديمه تذاكر لحفل موسيقي',
      isTrue: false
    }]
  },
  {
    question:
'إطار عمل لغات الحب الخمس ينطبق فقط على العلاقات الرومانسية'    ,
    imageUrl: '',
    levelId: 1,
    isActive: true,
    adminId: 1,
    answers : [
      {
        answer: ' صح ',
        isTrue: false
      },
      {
        answer: ' خطأ ',
        isTrue: true
      }
    ]
  },
  {
    question:
    ' لغات الحب الخمس هي أفعال الخدمة، كلمات التشجيع، استقبال الهدايا، الوقت الجيد، واللمسة الجسدية.'
   ,
    imageUrl: '',
    levelId: 1,
    isActive: true,
    adminId: 1,
    answers : [
      {
        answer: 'صح',
        isTrue: true
      },
      {
        answer: 'خطأ',
        isTrue: false
      }
    ]
  },
  {
    question:'يمكن أن يساعد فهم لغة حب شريكك على تحسين التواصل في علاقتك.',
    imageUrl: '',
    levelId: 1,
    isActive: true,
    adminId: 1,
    answers : [
      {
        answer: 'صح ',
        isTrue: true
      },
      {
        answer: 'خطأ ',
        isTrue: false
      }
    ]
  },

  {
    levelId: 2,
    isActive: true,
    adminId: 1,
    question:
    'كيف يمكن أن نعرف لغة الحب الخاصة بنا؟',
    imageUrl: '',
    answers : [
      {
        answer: 'تمن خلال التفكير في ما يجعلنا تشعر بالحب والتقدير',
        isTrue: true
      },
      {
        answer: 'إجراء اختبار شخصية ',
        isTrue: false
      },
      {
        answer: 'تحليل علاقتنا السابقة',
        isTrue: false
      },
      {
        answer: 'لا شيء مما سبق ',
        isTrue: false
      }
    ]
  },
  {
    levelId: 2,
    isActive: true,
    adminId: 1,
    question:
      'يمكن أن يكون إطار عمل لغات الحب الخمس مفيدًا لـ:',
    imageUrl: '',
    answers : [
      {
        answer: 'العلاقات الرومانسية فقط',
        isTrue: false
      },
      {
        answer:'جميع أنواع العلاقات الحميمة، بما في ذلك الصداقات والعائلة',
        isTrue: true
      },
      {
        answer: 'تقييم التوافق قبل المواعدة مع شخص ما',
        isTrue: false
      },
      {
        answer: 'لا شيء مما سبق',   isTrue: false
      }
    ]
  },
  {
    levelId: 2,
    isActive: true,
    adminId: 1,
    question: 'ما هو العيب المحتمل في التركيز فقط على إعطاء شريكك ما تظن أنه يريده، بدلاً من التركيز على لغة حبه؟',
    imageUrl: '',
    answers : [
      {
        answer: 'قد لا يجعله يشعر بالحب والتقدير',
        isTrue: true
      },
      {
        answer: 'قد يكون شراء الهدايا باستمرار مكلفًا',
        isTrue: false
      },
      {
        answer: 'يدل على قلة الجهد والإبداع',
        isTrue: false
      },
      {
        answer: 'يمكن أن يؤدي إلى خلافات حول ماهية الحب "الحقيقي".',
        isTrue: true
      }
    ]
  },
  {
    levelId: 2,
    isActive: false,
    adminId: 1,
    question:
      ' لا ينطبق مفهوم لغات الحب على الأطفال ',
    imageUrl: '',
    answers : [
      {
        answer: ' صح ',
        isTrue: false
      },
      {
        answer: ' خطأ',
        isTrue: true
      }
    ]
  },
  {
    levelId: 2,
    isActive: true,
    adminId: 1,
    question:
      'يؤكد الكتاب على أن كل الناس لديهم نفس لغة الحب.',
    imageUrl: ''
    ,answers : [ {
      answer: 'صح',
      isTrue: false
    },
    {
      answer: 'خطأ',
      isTrue: true
    }]
  },
  {
    levelId: 2,
    adminId: 1,
    isActive: true,
    question:'ما هي أسهل لغة حب يمكن تعلّمها حسب الكاتب',
    imageUrl: '',
    answers : [
      {
        answer: 'الاتصال الجسدي',
        isTrue: false
      },
      {
        answer: 'تقديم الهدايا ',
        isTrue: true
      },
      {
        answer: 'تخصيص الوقت',
        isTrue: false
      },
      {
        answer: 'كلمات التشجيع',
        isTrue: false
      }
    ]
  },
  {
    levelId: 2,
    adminId: 1,
    isActive: true,
    question: ' أي من هذه الاختيارات هي لغة "الاتصال الجسدي" ',
    imageUrl: '',
    answers : [
      {
        answer: 'الذهاب لقضاء وقت في السينما ',
        isTrue: false
      },
      {
        answer: 'شراء تذاكر لحفل موسيقي',
        isTrue: true
      },
      {
        answer: 'تقبيل جبهة الرأس ',
        isTrue: true
      },
      {
        answer: 'غسل صحون الطعام بعد الأكل',
        isTrue: false
      }
    ]
  },
  {
    levelId: 2,
    isActive: true,
    adminId: 1,
    question: 'لغة كلمات التشجيع لها أكثر من طريقة ووسيلة ',
    imageUrl: '',
    answers : [
      {
        answer: 'صح',
        isTrue: true
      },
      {
        answer: 'خطأ',
        isTrue: true
      }
    ]
    
  },
  {
    levelId: 3,
    isActive: true,
    adminId: 1,
    question: ' الخطأ الشائع الذي يقع فيه معظم الأزواج هو',
    imageUrl: '',
    answers : [
      {
        answer: 'لا يتكلمون لغة الحب التي يفضلها شريكهم',
        isTrue: true
      },
      {
        answer: 'يركزون على لغة حب معيّنة ويتجاهلون البقية',
        isTrue: false
      },
      {
        answer: 'شراء هدايا غالية جدا',
        isTrue: false
      },
      {
        answer: 'كل ما سبق',
        isTrue: false
      }
    ]
  },
  {
    levelId: 3,
    isActive: true,
    adminId: 1,
    question: ' يؤكد الكتاب على أن',
    imageUrl: '',
    answers : [
      {
        answer: 'أن الأفعال أهم من الكلمات ',
        isTrue: false
      },
      {
        answer: 'أن التعبير عن الحب يكون أفضل بالاتصال الجسدي',
        isTrue: false
      },
      {
        answer: 'أن لغات الحب الخمس هي ثابتة دائما ولا تتغير',
        isTrue: false
      },
      {
        answer: 'أهمية فهم كيف ومتى يشعر شريكك بالحب',
        isTrue: false
      },
    ]
  },
  {
    levelId: 3,
    isActive: true,
    adminId: 1,
    question: ' لا يمكن أن التعامل والتواصل إلا بلغة حب واحدة',
    imageUrl: '',
    answers : [
      {
        answer: 'صح',
        isTrue: false
      },
      {
        answer: 'خطأ',
        isTrue: true
      }
    ]
  },
  {
    levelId: 3,
    isActive: true,
    adminId: 1,
    question: ' عندما يمتلك الثنائي لغتي حب مختلفة فإنّه من المحبذ',
    imageUrl: '',
    answers : [
      {
        answer: 'التركيز بشكل منفرد على لغتهم الخاصة ',
        isTrue: false
      },
      {
        answer: 'تعلم لغة حب الشريك الآخر ومحاولة فهمها',
        isTrue: true
      },
      {
        answer: 'الافتراق لأن العلاقة لن تدوم',
        isTrue: false
      },
      {
        answer: 'تجنب التعبير عن الحب ',
        isTrue: false
      }
    ]
  },
  {
    levelId: 3,
    isActive: true,
    adminId: 1,
    question: ' أهم شيء في العلاقة هو أن يكون لديك نفس لغة الحب التي لدى شريكك',
    imageUrl: '',
    answers : [
      {
        answer: 'صح',
        isTrue: false
      },
      {
        answer: 'خطأ',
        isTrue: true
      }
    ]
  },
  {
    levelId: 3,
    isActive: true,
    adminId: 1,
    question: ' وفقًا للكتاب، فإن أفضل طريقة لإظهار الحب هي تقديم هدايا باهظة الثمن',
    imageUrl: '',
    answers : [
      {
        answer: 'صح',
        isTrue: false
      },
      {
        answer: 'خطأ',
        isTrue: true
      }
    ]
  },
  {
    levelId: 3,
    isActive: true,
    adminId: 1,
    question: ' < أي من هذه الاختيارات هي لغة < تكريس الوقت',
    imageUrl: '',
    answers : [
      {
        answer: 'الخروج معا للنزهة',
        isTrue: false
      },
      {
        answer: 'التكلم والتواصل والانصات',
        isTrue: false
      },
      {
        answer: 'القيام بنشاط يفضلّه الشخص الذي تحبه',
        isTrue: false
      },
      {
        answer: 'كل ما سبق ',
        isTrue: true
      }
    ]
  },
  
  {
    levelId: 3,
    isActive: true,
    adminId: 1,
    question: ' يعتبر الكتاب من بين الكتب الأفضل مبيعا في العالم',
    imageUrl: '',
    answers : [
      {
        answer: 'صح',
        isTrue: true
      },
      {
        answer: 'خطأ',
        isTrue: false
      }
    ]
  },
];


export const prop = [
  {
    label: 'العادة 1 كن مبادرا',
    slogan: 'تحفزّ وللنجاح اقفز',
    reward: 'اربح 50% في دورة من الدورات التدريبية لجليس'
  },
  {
    label: 'العادة 2 ابدأ والهدف في ذهنك',
    slogan: 'نظم وقتك مع أجندا جليس',
    reward: 'أجندا جليس'
  },
  {
    label: 'العادة 3 الأهم ثم المهم',
    slogan: 'اربح خطة استراتيجية مع جليس',
    reward: 'اربح 50% في دورة من الدورات التدريبية لجليس'
  },
  {
    label: 'العادة 4 المنفعة المتبادلة',
    slogan: 'خير الناس أنفعهم للناس',
    reward: 'قسيمة شراء 50 د مع اخذ صورة داخل جناح جليس في المعرض'
  },
  {
    label: 'العادة 5 التواصل',
    slogan: 'نأخذ فاصل للتواصل',
    reward: 'اربح استشارة مجانية في التواصل'
  },
  {
    label: 'العادة 6 التآزر',
    slogan: 'اهدي لصديقك',
    reward: 'اهدي لصديقك هدية من جليسكم'
  },
  {
    label: 'العادة 7 اشحذ المنشار',
    slogan: 'جدد وقوّي نفسك',
    reward: `50% رحلة أو اشتراك لمدة شهر قاعة رياضة
    اشتراك spotifiy Premium لمدة شهر`
  },
];
