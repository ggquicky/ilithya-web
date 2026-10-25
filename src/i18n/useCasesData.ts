export interface UseCaseDoc {
  name: string;
  type: string;
  note: string;
}

export interface UseCaseStation {
  step: number;
  role: string;
  name: string;
  action: string;
  badge: string;
}

export interface UseCaseClosure {
  type: string;
  summary: string;
  sla: string;
  benefit: string;
}

export interface UseCaseItem {
  id: string;
  category: string;
  categoryName: string;
  code: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  docs: UseCaseDoc[];
  stations: UseCaseStation[];
  closure: UseCaseClosure;
}

export const useCasesEs: UseCaseItem[] = [
  {
    id: "compras-proveedores",
    category: "finanzas",
    categoryName: "Gestión Financiera y Compras",
    code: "CASO 01",
    title: "Compra o Pago a Proveedores",
    shortDesc: "Autorización estructurada de adquisiciones corporativas asegurando viabilidad técnica y presupuestaria.",
    fullDesc: "Estructuración del proceso de autorización para adquisiciones corporativas, asegurando la viabilidad técnica y presupuestaria antes de ejecutar la compra y evitando cotizaciones vencidas.",
    docs: [
      { name: "Formato de Requisición", type: "PDF / Form", note: "Llenado por solicitante" },
      { name: "Cotización del Proveedor", type: "PDF / Imagen", note: "Con vigencia y precios" },
      { name: "Justificación de Compra", type: "Doc / Adjunto", note: "Impacto operativo" }
    ],
    stations: [
      {
        step: 1,
        role: "Solicitante",
        name: "Carga de Expediente",
        action: "Sube requisa, cotización y justificación en un solo paquete digital.",
        badge: "Iniciado"
      },
      {
        step: 2,
        role: "Estación 1: Jefe de Área",
        name: "Validación Técnica",
        action: "Revisa la pertinencia operativa y autoriza con firma digital y sello de fecha/hora.",
        badge: "Sello Digital"
      },
      {
        step: 3,
        role: "Estación 2: Gerente Financiero",
        name: "Disponibilidad de Presupuesto",
        action: "Cruza con la partida presupuestaria disponible y aprueba el gasto formalmente.",
        badge: "Control Fiscal"
      },
      {
        step: 4,
        role: "Estación 3: Depto. de Compras",
        name: "Emisión de Orden Oficial",
        action: "Revisión final y despacho de orden oficial al proveedor basándose en el PDF consolidado.",
        badge: "Aprobación Final"
      }
    ],
    closure: {
      type: "PDF Consolidado con Sello Criptográfico",
      summary: "El proveedor recibe la orden con todas las firmas integradas en un único expediente digital inmutable.",
      sla: "SLA Típico: < 24 Horas",
      benefit: "Elimina compras a destiempo y protege contra aumentos imprevistos de cotización."
    }
  },
  {
    id: "viaticos-colaboradores",
    category: "finanzas",
    categoryName: "Gestión Financiera y Compras",
    code: "CASO 02",
    title: "Solicitud y Pago de Viáticos",
    shortDesc: "Control previo de gastos de viaje de trabajo locales o internacionales con liquidación ordenada.",
    fullDesc: "Aprobación ordenada de traslados, hospedaje y alimentación antes del viaje, con verificación contable automática para liquidación sin papeleo disperso.",
    docs: [
      { name: "Solicitud de Itinerario", type: "Formulario", note: "Fechas, destino y propósito" },
      { name: "Presupuesto Estimado", type: "Hoja de Cálculo / PDF", note: "Tarifas de viáticos" },
      { name: "Comprobantes / Facturas", type: "PDF / XML", note: "Para fase de liquidación" }
    ],
    stations: [
      {
        step: 1,
        role: "Colaborador Viajero",
        name: "Registro de Gira de Trabajo",
        action: "Ingresa itinerario de fechas y cálculo de asignación diaria de viáticos.",
        badge: "Solicitud"
      },
      {
        step: 2,
        role: "Estación 1: Supervisor Inmediato",
        name: "Aprobación de Misión",
        action: "Valida la necesidad del traslado y autoriza la salida del colaborador.",
        badge: "Visto Bueno"
      },
      {
        step: 3,
        role: "Estación 2: Contabilidad & Pagos",
        name: "Desembolso y Liquidación",
        action: "Verifica que las facturas cumplan los requisitos fiscales y emite la transferencia.",
        badge: "Liquidación"
      }
    ],
    closure: {
      type: "Expediente Contable Cerrado",
      summary: "Tesorería archiva el PDF consolidado con todas las facturas y sellos de aprobación listos para fiscalización.",
      sla: "SLA Típico: < 48 Horas",
      benefit: "Elimina anticipos descontrolados y reduce el tiempo de reembolso a los colaboradores."
    }
  },
  {
    id: "onboarding-candidatos",
    category: "rrhh",
    categoryName: "Recursos Humanos y Talento",
    code: "CASO 03",
    title: "Onboarding y Selección",
    shortDesc: "Filtro colaborativo ágil de CVs entre líderes de área y RRHH para agendar citas sin cadenas de correo.",
    fullDesc: "Orquestación del flujo de selección entre el líder técnico y recursos humanos para acordar propuestas salariales y agendar entrevistas sin pérdida de candidatos valiosos.",
    docs: [
      { name: "Curriculum Vitae (CV)", type: "PDF", note: "Perfil profesional" },
      { name: "Requisa de Contratación", type: "Formato Corporativo", note: "Perfil del puesto y vacante" },
      { name: "Propuesta Económica", type: "PDF Confidencial", note: "Rango salarial autorizado" }
    ],
    stations: [
      {
        step: 1,
        role: "Especialista de RRHH",
        name: "Publicación de Perfil",
        action: "Carga la terna final de candidatos con sus evaluaciones psicométricas.",
        badge: "Filtro Inicial"
      },
      {
        step: 2,
        role: "Estación 1: Líder de Área",
        name: "Aprobación Técnica",
        action: "Revisa la experiencia técnica y marca candidatos seleccionados para entrevista formal.",
        badge: "Visto Bueno Técnico"
      },
      {
        step: 3,
        role: "Estación 2: Gerencia General",
        name: "Aprobación de Oferta",
        action: "Firma la carta de oferta salarial para proceder a la contratación oficial.",
        badge: "Firma de Oferta"
      }
    ],
    closure: {
      type: "Carta Oferta Firmada y Expediente de Ingreso",
      summary: "El candidato recibe su propuesta formal con firmas digitales verificables y fecha de inicio confirmada.",
      sla: "SLA Típico: < 12 Horas",
      benefit: "Gana talento de alto nivel contratando días antes que los competidores."
    }
  },
  {
    id: "solicitud-vacaciones",
    category: "rrhh",
    categoryName: "Recursos Humanos y Talento",
    code: "CASO 04",
    title: "Vacaciones (Acción de Personal)",
    shortDesc: "Trámite de permisos y vacaciones con sellos de tiempo y archivado automático del PDF final en el expediente digital.",
    fullDesc: "Gestión clara de solicitudes de descanso legal o permisos personales asegurando que no se traslapen ausencias clave en los equipos de trabajo.",
    docs: [
      { name: "Formato de Acción de Personal", type: "PDF / Form", note: "Días solicitados" },
      { name: "Historial de Saldo de Días", type: "Reporte RRHH", note: "Días disponibles" }
    ],
    stations: [
      {
        step: 1,
        role: "Colaborador",
        name: "Solicitud de Días",
        action: "Selecciona el período deseado y verifica su saldo disponible en pantalla.",
        badge: "Trámite"
      },
      {
        step: 2,
        role: "Estación 1: Jefe Directo",
        name: "Confirmación de Cobertura",
        action: "Verifica que el equipo cuente con suplentes y autoriza la fecha solicitada.",
        badge: "Aprobado"
      },
      {
        step: 3,
        role: "Estación 2: Nómina y RRHH",
        name: "Registro en Planilla",
        action: "Aplica la deducción de días en el sistema central de nóminas y sella el PDF.",
        badge: "Cierre RRHH"
      }
    ],
    closure: {
      type: "Constancia Sellada de Vacaciones",
      summary: "El colaborador y el supervisor reciben el PDF formalmente firmado para su archivo digital personal.",
      sla: "SLA Típico: < 8 Horas",
      benefit: "Transparencia total en saldos y eliminación de disputas por días pendientes."
    }
  },
  {
    id: "compra-suministros",
    category: "operaciones",
    categoryName: "Operaciones y Servicios Generales",
    code: "CASO 05",
    title: "Compra de Suministros",
    shortDesc: "Validación de insumos y mantenimiento de sedes corporativas con cruce presupuestario y despacho con bodega.",
    fullDesc: "Canal rápido para tramitar reparaciones urgentes, insumos de oficina y consumibles tecnológicos sin burocracia que paralice la infraestructura.",
    docs: [
      { name: "Boleta de Suministros", type: "PDF / Form", note: "Detalle de ítems requeridos" },
      { name: "Cotización de Servicio", type: "PDF / Factura Proforma", note: "En caso de reparaciones" }
    ],
    stations: [
      {
        step: 1,
        role: "Encargado de Sede",
        name: "Requerimiento de Material",
        action: "Detalla la necesidad de suministros o reparación urgente de instalaciones.",
        badge: "Requerimiento"
      },
      {
        step: 2,
        role: "Estación 1: Servicios Generales",
        name: "Verificación de Inventario",
        action: "Valida si existe stock disponible en bodega central o si requiere orden de compra externa.",
        badge: "Inventario"
      },
      {
        step: 3,
        role: "Estación 2: Bodega / Despacho",
        name: "Entrega y Recepción",
        action: "El documento autorizado retorna a Servicios Generales para recibir los suministros.",
        badge: "Logística"
      }
    ],
    closure: {
      type: "PDF de Autorización Inmediata",
      summary: "Servicios Generales recibe el documento con código QR de verificación para despachar con bodega.",
      sla: "SLA Típico: < 24 Horas",
      benefit: "Mantenimiento ágil sin instalaciones paralizadas por retrasos de firma."
    }
  }
];

export const useCasesEn: UseCaseItem[] = [
  {
    id: "compras-proveedores",
    category: "finanzas",
    categoryName: "Financial & Procurement Management",
    code: "CASE 01",
    title: "Vendor Procurement & Invoices",
    shortDesc: "Structured authorization of corporate purchases ensuring technical viability and budget allocation.",
    fullDesc: "Structuring the authorization pipeline for enterprise acquisitions, validating technical relevance and budgetary availability prior to order execution to prevent expired supplier quotes.",
    docs: [
      { name: "Purchase Requisition", type: "PDF / Form", note: "Completed by requester" },
      { name: "Vendor Quotation", type: "PDF / Image", note: "With valid terms & prices" },
      { name: "Business Justification", type: "Doc / Attachment", note: "Operational impact" }
    ],
    stations: [
      {
        step: 1,
        role: "Requester",
        name: "Dossier Upload",
        action: "Submits purchase requisition, supplier quotation, and business case in a single digital package.",
        badge: "Initiated"
      },
      {
        step: 2,
        role: "Station 1: Area Supervisor",
        name: "Technical Validation",
        action: "Verifies operational necessity and authorizes with digital signature and UTC timestamp.",
        badge: "Digital Stamp"
      },
      {
        step: 3,
        role: "Station 2: Finance Director",
        name: "Budget Pre-Clearance",
        action: "Cross-checks available budget line item and formally approves company expenditure.",
        badge: "Budget Control"
      },
      {
        step: 4,
        role: "Station 3: Procurement Dept",
        name: "Purchase Order Issuance",
        action: "Conducts final audit and dispatches official purchase order to vendor based on the consolidated PDF.",
        badge: "Final Approval"
      }
    ],
    closure: {
      type: "Consolidated PDF with Cryptographic Stamp",
      summary: "The vendor receives the purchase order with all signatures permanently consolidated into an immutable PDF.",
      sla: "Typical SLA: < 24 Hours",
      benefit: "Eliminates last-minute rush orders and defends against unexpected supplier price hikes."
    }
  },
  {
    id: "viaticos-colaboradores",
    category: "finanzas",
    categoryName: "Financial & Procurement Management",
    code: "CASE 02",
    title: "Travel Allowance & Per Diems",
    shortDesc: "Pre-approval of domestic and international corporate travel expenses with streamlined expense settlement.",
    fullDesc: "Standardized request, authorization, and expense reconciliation flow for team travel, ensuring policy compliance before disbursements.",
    docs: [
      { name: "Travel Itinerary Request", type: "Form", note: "Dates, destination & purpose" },
      { name: "Estimated Budget", type: "Spreadsheet / PDF", note: "Per diem allowances" },
      { name: "Receipts & Invoices", type: "PDF / Tax Receipts", note: "Expense reconciliation phase" }
    ],
    stations: [
      {
        step: 1,
        role: "Traveling Team Member",
        name: "Business Travel Submission",
        action: "Submits travel dates, client meeting itinerary, and standard per diem calculation.",
        badge: "Request"
      },
      {
        step: 2,
        role: "Station 1: Direct Supervisor",
        name: "Travel Authorization",
        action: "Validates travel objective and approves dates preventing out-of-policy trips.",
        badge: "Endorsed"
      },
      {
        step: 3,
        role: "Station 2: Accounting & Payroll",
        name: "Disbursement & Clearance",
        action: "Reviews tax-compliant receipts and schedules direct bank transfer to the traveler.",
        badge: "Settled"
      }
    ],
    closure: {
      type: "Closed Accounting Expense File",
      summary: "Finance permanently archives the consolidated PDF with all receipts and approval stamps ready for fiscal audits.",
      sla: "Typical SLA: < 48 Hours",
      benefit: "Eliminates unapproved travel spending and cuts employee reimbursement delays by 75%."
    }
  },
  {
    id: "onboarding-candidatos",
    category: "rrhh",
    categoryName: "Human Resources & Talent",
    code: "CASE 03",
    title: "Candidate Onboarding & Hiring",
    shortDesc: "Agile collaborative candidate review between hiring managers and HR without messy email threads.",
    fullDesc: "Speed up the hiring lifecycle from candidate evaluation and salary pre-approval to formal offer letter signing without losing high-demand talent.",
    docs: [
      { name: "Curriculum Vitae (CV)", type: "PDF", note: "Candidate resume" },
      { name: "Hiring Requisition", type: "Corporate Form", note: "Job description & opening" },
      { name: "Compensation Proposal", type: "Confidential PDF", note: "Authorized salary band" }
    ],
    stations: [
      {
        step: 1,
        role: "HR Talent Specialist",
        name: "Shortlist Submission",
        action: "Uploads final shortlisted candidate profiles and psychometric assessments.",
        badge: "Initial Screening"
      },
      {
        step: 2,
        role: "Station 1: Hiring Manager",
        name: "Technical Assessment",
        action: "Reviews technical portfolio and greenlights candidates for final leadership interviews.",
        badge: "Technical Approval"
      },
      {
        step: 3,
        role: "Station 2: Executive Management",
        name: "Offer Authorization",
        action: "Affixes digital signature on the formal employment offer letter and benefits schedule.",
        badge: "Offer Signed"
      }
    ],
    closure: {
      type: "Signed Offer Letter & Onboarding Dossier",
      summary: "The candidate receives their verifiable digital offer letter with confirmed start date and benefits.",
      sla: "Typical SLA: < 12 Hours",
      benefit: "Secures top talent swiftly before competing corporate offers are presented."
    }
  },
  {
    id: "solicitud-vacaciones",
    category: "rrhh",
    categoryName: "Human Resources & Talent",
    code: "CASE 04",
    title: "Time-Off & Vacation Requests",
    shortDesc: "Official leave processing with timestamps and automated permanent archiving in the digital employee file.",
    fullDesc: "Clear and transparent leave approval preventing overlapping absences within critical teams while maintaining accurate payroll records.",
    docs: [
      { name: "Personnel Action Form", type: "PDF / Form", note: "Days requested" },
      { name: "Accrual Balance Report", type: "HR Summary", note: "Available days balance" }
    ],
    stations: [
      {
        step: 1,
        role: "Employee",
        name: "Leave Submission",
        action: "Selects desired dates and verifies available accrual balance in real time.",
        badge: "Submitted"
      },
      {
        step: 2,
        role: "Station 1: Team Supervisor",
        name: "Shift Coverage Review",
        action: "Confirms shift coverage among colleagues and approves the scheduled absence.",
        badge: "Approved"
      },
      {
        step: 3,
        role: "Station 2: Payroll & HR",
        name: "Payroll Registration",
        action: "Deducts leave balance in the master HR system and stamps the final personnel document.",
        badge: "HR Closure"
      }
    ],
    closure: {
      type: "Certified Time-Off Certificate",
      summary: "Both employee and supervisor receive the certified PDF for personal and company digital records.",
      sla: "Typical SLA: < 8 Hours",
      benefit: "Total transparency in leave balances and elimination of dispute-prone manual tracking."
    }
  },
  {
    id: "compra-suministros",
    category: "operaciones",
    categoryName: "Operations & General Services",
    code: "CASE 05",
    title: "Facility Supplies & Maintenance",
    shortDesc: "Consumable and repair authorization with budget pre-clearance and warehouse dispatch confirmation.",
    fullDesc: "Fast-track approval for office supplies, facility repairs, and technology peripherals to keep corporate offices running without disruption.",
    docs: [
      { name: "Supply Requisition Slip", type: "PDF / Form", note: "Itemized request details" },
      { name: "Service Estimate / Invoice", type: "PDF / Proforma", note: "For third-party repairs" }
    ],
    stations: [
      {
        step: 1,
        role: "Facility Lead",
        name: "Material Request",
        action: "Details required supplies or urgent maintenance service for company offices.",
        badge: "Ticket"
      },
      {
        step: 2,
        role: "Station 1: Operations Dept",
        name: "Inventory Check",
        action: "Checks whether items are in stock or dispatches purchase order to approved suppliers.",
        badge: "Inventory"
      },
      {
        step: 3,
        role: "Station 2: Warehouse Dispatch",
        name: "Fulfillment & Receipt",
        action: "The authorized requisition returns with QR verification to release items from the warehouse.",
        badge: "Logistics"
      }
    ],
    closure: {
      type: "Certified Work Order",
      summary: "Operations receives the stamped authorization with verification QR code for warehouse pickup.",
      sla: "Typical SLA: < 24 Hours",
      benefit: "Agile facility upkeep without operations stalled by approval delays."
    }
  }
];
