---
title: 'Title of the page'
description: 'meta description of the page'
category: 'Hello Nuxt'
createtime: '2023-08-20 17:29:00'
cover: '/images/content/cover/banner2.jpeg'
---

# Hello Nuxt


```tsx
  // 查看审核记录
  const viewAuditRecords = (
    boothId: string,
    type: IObjectType,
    materialId?: string
  ) => {  
    if (type) {
      setAuditRecordsModalProps({
        ...auditRecordsModalProps,
        visible: true,
        boothId: boothId,
        type,
      });
    } else {
      setAuditRecordsModalProps({
        ...auditRecordsModalProps,
        visible: true,
        boothId: boothId,
        materialId: materialId,
        type: IObjectType.Material,
      });
    }
  };
  const [auditRecordsModalProps, setAuditRecordsModalProps] = useState<
    Omit<IAuditRecordsModalProps, 'events'>
  >({
    visible: false,
    boothId: '',
    type: IObjectType.Booth,
    materialId: '',
  });
```

asd