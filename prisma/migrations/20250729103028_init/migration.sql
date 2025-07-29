-- CreateTable
CREATE TABLE "TANK" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "fuelType" TEXT,
    "currentLevel" DOUBLE PRECISION,
    "capacity" DOUBLE PRECISION,
    "securityThreshold" DOUBLE PRECISION,
    "temperature" DOUBLE PRECISION,
    "status" TEXT,

    CONSTRAINT "TANK_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PRODUCT" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "category" TEXT,
    "unit" TEXT,
    "stock" INTEGER,
    "minThreshold" INTEGER,
    "status" TEXT,

    CONSTRAINT "PRODUCT_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SUPPLIER" (
    "id" TEXT NOT NULL,
    "name" TEXT,

    CONSTRAINT "SUPPLIER_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PURCHASE_ORDER" (
    "id" TEXT NOT NULL,
    "supplierId" TEXT,
    "orderDate" TIMESTAMP(3),
    "expectedDelivery" TIMESTAMP(3),
    "notes" TEXT,

    CONSTRAINT "PURCHASE_ORDER_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PURCHASE_ORDER_ITEM" (
    "id" TEXT NOT NULL,
    "orderId" TEXT,
    "productId" TEXT,
    "quantity" INTEGER,

    CONSTRAINT "PURCHASE_ORDER_ITEM_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ROLE" (
    "id" TEXT NOT NULL,
    "name" TEXT,

    CONSTRAINT "ROLE_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "USER_ROLE" (
    "userId" TEXT NOT NULL,
    "roleId" TEXT NOT NULL,

    CONSTRAINT "USER_ROLE_pkey" PRIMARY KEY ("userId","roleId")
);

-- CreateTable
CREATE TABLE "USER" (
    "id" TEXT NOT NULL,
    "fullName" TEXT,
    "email" TEXT,
    "roles" TEXT,
    "status" TEXT,
    "lastLogin" TIMESTAMP(3),

    CONSTRAINT "USER_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SALES_TRANSACTION" (
    "id" TEXT NOT NULL,
    "employeeId" TEXT,
    "date" TIMESTAMP(3),
    "shift" INTEGER,
    "volume" DOUBLE PRECISION,
    "amount" DOUBLE PRECISION,
    "productId" TEXT,
    "clientAccountId" TEXT,
    "pumpId" TEXT,
    "paymentMethod" TEXT,
    "unitPrice" DOUBLE PRECISION,
    "discount" DOUBLE PRECISION,

    CONSTRAINT "SALES_TRANSACTION_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CLIENT_ACCOUNT" (
    "id" TEXT NOT NULL,
    "companyName" TEXT,
    "currentBalance" DOUBLE PRECISION,
    "creditLimit" DOUBLE PRECISION,
    "availableCredit" DOUBLE PRECISION,
    "status" TEXT,
    "type" TEXT,

    CONSTRAINT "CLIENT_ACCOUNT_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CUSTOMER" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "contact" TEXT,
    "email" TEXT,
    "type" TEXT,
    "status" TEXT,

    CONSTRAINT "CUSTOMER_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ACCOUNT_STATEMENT" (
    "id" TEXT NOT NULL,
    "clientAccountId" TEXT,
    "startDate" TIMESTAMP(3),
    "endDate" TIMESTAMP(3),
    "initialBalance" DOUBLE PRECISION,
    "finalBalance" DOUBLE PRECISION,

    CONSTRAINT "ACCOUNT_STATEMENT_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ACCOUNT_STATEMENT_LINE" (
    "id" TEXT NOT NULL,
    "statementId" TEXT,
    "date" TIMESTAMP(3),
    "description" TEXT,
    "debit" DOUBLE PRECISION,
    "credit" DOUBLE PRECISION,
    "progressiveBalance" DOUBLE PRECISION,

    CONSTRAINT "ACCOUNT_STATEMENT_LINE_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ACTIVITY_REPORT" (
    "id" TEXT NOT NULL,
    "startDate" TIMESTAMP(3),
    "endDate" TIMESTAMP(3),
    "totalVolume" DOUBLE PRECISION,
    "totalAmount" DOUBLE PRECISION,
    "totalTransactions" INTEGER,

    CONSTRAINT "ACTIVITY_REPORT_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MARGIN_ANALYSIS" (
    "id" TEXT NOT NULL,
    "startDate" TIMESTAMP(3),
    "endDate" TIMESTAMP(3),
    "totalRevenue" DOUBLE PRECISION,
    "totalCost" DOUBLE PRECISION,
    "grossMargin" DOUBLE PRECISION,
    "marginRate" DOUBLE PRECISION,

    CONSTRAINT "MARGIN_ANALYSIS_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EXPENSE" (
    "id" TEXT NOT NULL,
    "date" TIMESTAMP(3),
    "description" TEXT,
    "category" TEXT,
    "amount" DOUBLE PRECISION,
    "supplierId" TEXT,

    CONSTRAINT "EXPENSE_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "INVOICE" (
    "id" TEXT NOT NULL,
    "clientAccountId" TEXT,
    "amountDue" DOUBLE PRECISION,
    "amountToInvoice" DOUBLE PRECISION,
    "amountPaid" DOUBLE PRECISION,
    "dateIssued" TIMESTAMP(3),
    "status" TEXT,

    CONSTRAINT "INVOICE_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CLAIM" (
    "id" TEXT NOT NULL,
    "customerId" TEXT,
    "date" TIMESTAMP(3),
    "type" TEXT,
    "status" TEXT,
    "description" TEXT,

    CONSTRAINT "CLAIM_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MAINTENANCE_INTERVENTION" (
    "id" TEXT NOT NULL,
    "date" TIMESTAMP(3),
    "equipment" TEXT,
    "description" TEXT,
    "type" TEXT,
    "technician" TEXT,
    "status" TEXT,

    CONSTRAINT "MAINTENANCE_INTERVENTION_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PUMP" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "fuelTypeId" TEXT NOT NULL,
    "sourceTankId" TEXT NOT NULL,
    "status" TEXT,

    CONSTRAINT "PUMP_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TEAM_ASSIGNMENT" (
    "id" TEXT NOT NULL,
    "date" TIMESTAMP(3),
    "shiftId" TEXT NOT NULL,
    "employeeId" TEXT NOT NULL,
    "role" TEXT,
    "pumpId" TEXT,

    CONSTRAINT "TEAM_ASSIGNMENT_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SHIFT" (
    "id" TEXT NOT NULL,
    "shiftDate" TIMESTAMP(3),
    "shiftType" TEXT,
    "startTime" TEXT,
    "endTime" TEXT,
    "notes" TEXT,

    CONSTRAINT "SHIFT_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ATTENDANCE" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "shiftId" TEXT NOT NULL,
    "arrivalTime" TIMESTAMP(3),
    "departureTime" TIMESTAMP(3),
    "status" TEXT,
    "reason" TEXT,

    CONSTRAINT "ATTENDANCE_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ABSENCE" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "absenceTypeId" TEXT NOT NULL,
    "startDate" TIMESTAMP(3),
    "endDate" TIMESTAMP(3),
    "reason" TEXT,
    "justification" TEXT,

    CONSTRAINT "ABSENCE_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ABSENCE_TYPE" (
    "id" TEXT NOT NULL,
    "name" TEXT,

    CONSTRAINT "ABSENCE_TYPE_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PURCHASE_ORDER" ADD CONSTRAINT "PURCHASE_ORDER_supplierId_fkey" FOREIGN KEY ("supplierId") REFERENCES "SUPPLIER"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PURCHASE_ORDER_ITEM" ADD CONSTRAINT "PURCHASE_ORDER_ITEM_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "PURCHASE_ORDER"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PURCHASE_ORDER_ITEM" ADD CONSTRAINT "PURCHASE_ORDER_ITEM_productId_fkey" FOREIGN KEY ("productId") REFERENCES "PRODUCT"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "USER_ROLE" ADD CONSTRAINT "USER_ROLE_userId_fkey" FOREIGN KEY ("userId") REFERENCES "USER"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "USER_ROLE" ADD CONSTRAINT "USER_ROLE_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "ROLE"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SALES_TRANSACTION" ADD CONSTRAINT "SALES_TRANSACTION_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "USER"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SALES_TRANSACTION" ADD CONSTRAINT "SALES_TRANSACTION_productId_fkey" FOREIGN KEY ("productId") REFERENCES "PRODUCT"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SALES_TRANSACTION" ADD CONSTRAINT "SALES_TRANSACTION_clientAccountId_fkey" FOREIGN KEY ("clientAccountId") REFERENCES "CLIENT_ACCOUNT"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SALES_TRANSACTION" ADD CONSTRAINT "SALES_TRANSACTION_pumpId_fkey" FOREIGN KEY ("pumpId") REFERENCES "PUMP"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ACCOUNT_STATEMENT" ADD CONSTRAINT "ACCOUNT_STATEMENT_clientAccountId_fkey" FOREIGN KEY ("clientAccountId") REFERENCES "CLIENT_ACCOUNT"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ACCOUNT_STATEMENT_LINE" ADD CONSTRAINT "ACCOUNT_STATEMENT_LINE_statementId_fkey" FOREIGN KEY ("statementId") REFERENCES "ACCOUNT_STATEMENT"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EXPENSE" ADD CONSTRAINT "EXPENSE_supplierId_fkey" FOREIGN KEY ("supplierId") REFERENCES "SUPPLIER"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "INVOICE" ADD CONSTRAINT "INVOICE_clientAccountId_fkey" FOREIGN KEY ("clientAccountId") REFERENCES "CLIENT_ACCOUNT"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CLAIM" ADD CONSTRAINT "CLAIM_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "CUSTOMER"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PUMP" ADD CONSTRAINT "PUMP_fuelTypeId_fkey" FOREIGN KEY ("fuelTypeId") REFERENCES "PRODUCT"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PUMP" ADD CONSTRAINT "PUMP_sourceTankId_fkey" FOREIGN KEY ("sourceTankId") REFERENCES "TANK"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TEAM_ASSIGNMENT" ADD CONSTRAINT "TEAM_ASSIGNMENT_shiftId_fkey" FOREIGN KEY ("shiftId") REFERENCES "SHIFT"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TEAM_ASSIGNMENT" ADD CONSTRAINT "TEAM_ASSIGNMENT_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "USER"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TEAM_ASSIGNMENT" ADD CONSTRAINT "TEAM_ASSIGNMENT_pumpId_fkey" FOREIGN KEY ("pumpId") REFERENCES "PUMP"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ATTENDANCE" ADD CONSTRAINT "ATTENDANCE_userId_fkey" FOREIGN KEY ("userId") REFERENCES "USER"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ATTENDANCE" ADD CONSTRAINT "ATTENDANCE_shiftId_fkey" FOREIGN KEY ("shiftId") REFERENCES "SHIFT"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ABSENCE" ADD CONSTRAINT "ABSENCE_userId_fkey" FOREIGN KEY ("userId") REFERENCES "USER"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ABSENCE" ADD CONSTRAINT "ABSENCE_absenceTypeId_fkey" FOREIGN KEY ("absenceTypeId") REFERENCES "ABSENCE_TYPE"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
