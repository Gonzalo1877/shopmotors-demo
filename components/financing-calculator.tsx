// "use client"

// import { useState, useEffect } from "react"
// import { Card, CardContent } from "@/components/ui/card"
// import { Slider } from "@/components/ui/slider"
// import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { Calculator } from "lucide-react"

// export default function FinancingCalculator() {
//   const [vehiclePrice, setVehiclePrice] = useState(150000)
//   const [downPayment, setDownPayment] = useState(30000)
//   const [loanTerm, setLoanTerm] = useState(60) // months
//   const [interestRate, setInterestRate] = useState(4.5)
//   const [paymentFrequency, setPaymentFrequency] = useState("monthly")
//   const [monthlyPayment, setMonthlyPayment] = useState(0)

//   useEffect(() => {
//     // Calculate loan amount
//     const loanAmount = vehiclePrice - downPayment

//     // Calculate monthly interest rate
//     const monthlyInterestRate = interestRate / 100 / 12

//     // Calculate monthly payment using the formula: P = L[i(1+i)^n]/[(1+i)^n-1]
//     // Where P = payment, L = loan amount, i = monthly interest rate, n = number of payments
//     const numerator = loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, loanTerm)
//     const denominator = Math.pow(1 + monthlyInterestRate, loanTerm) - 1

//     let payment = numerator / denominator

//     // Adjust payment based on frequency
//     if (paymentFrequency === "biweekly") {
//       payment = (payment * 12) / 26
//     } else if (paymentFrequency === "weekly") {
//       payment = (payment * 12) / 52
//     }

//     setMonthlyPayment(payment)
//   }, [vehiclePrice, downPayment, loanTerm, interestRate, paymentFrequency])

//   const formatCurrency = (value: number) => {
//     return new Intl.NumberFormat("en-US", {
//       style: "currency",
//       currency: "USD",
//       maximumFractionDigits: 0,
//     }).format(value)
//   }

//   return (
//     <section id="financing" className="py-20 bg-zinc-950">
//       <div className="container">
//         <div className="text-center mb-12">
//           <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white">
//             Financing <span className="text-gold-500">Calculator</span>
//           </h2>
//           <p className="text-zinc-400 mt-2 max-w-2xl mx-auto font-inter">
//             Plan your purchase with our interactive financing calculator and find the perfect payment plan for your
//             dream car
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
//           <Card className="bg-zinc-900 border-zinc-800 overflow-hidden">
//             <CardContent className="p-6">
//               <div className="flex items-center gap-2 mb-6">
//                 <Calculator className="h-5 w-5 text-gold-500" />
//                 <h3 className="text-xl font-semibold text-white">Payment Estimator</h3>
//               </div>

//               <div className="space-y-8">
//                 <div>
//                   <div className="flex justify-between mb-2">
//                     <label className="text-sm font-medium text-zinc-300">Vehicle Price</label>
//                     <span className="text-gold-500 font-semibold">{formatCurrency(vehiclePrice)}</span>
//                   </div>
//                   <Slider
//                     value={[vehiclePrice]}
//                     min={50000}
//                     max={500000}
//                     step={5000}
//                     onValueChange={(value) => setVehiclePrice(value[0])}
//                     className="my-4"
//                   />
//                   <div className="flex justify-between text-xs text-zinc-400">
//                     <span>$50,000</span>
//                     <span>$500,000</span>
//                   </div>
//                 </div>

//                 <div>
//                   <div className="flex justify-between mb-2">
//                     <label className="text-sm font-medium text-zinc-300">Down Payment</label>
//                     <span className="text-gold-500 font-semibold">{formatCurrency(downPayment)}</span>
//                   </div>
//                   <Slider
//                     value={[downPayment]}
//                     min={0}
//                     max={vehiclePrice / 2}
//                     step={1000}
//                     onValueChange={(value) => setDownPayment(value[0])}
//                     className="my-4"
//                   />
//                   <div className="flex justify-between text-xs text-zinc-400">
//                     <span>$0</span>
//                     <span>{formatCurrency(vehiclePrice / 2)}</span>
//                   </div>
//                 </div>

//                 <div>
//                   <div className="flex justify-between mb-2">
//                     <label className="text-sm font-medium text-zinc-300">Loan Term</label>
//                     <span className="text-gold-500 font-semibold">{loanTerm} months</span>
//                   </div>
//                   <Tabs defaultValue="60" onValueChange={(value) => setLoanTerm(Number.parseInt(value))}>
//                     <TabsList className="grid grid-cols-4 h-auto bg-zinc-800">
//                       <TabsTrigger
//                         value="24"
//                         className="data-[state=active]:bg-gold-500 data-[state=active]:text-zinc-900"
//                       >
//                         24 mo
//                       </TabsTrigger>
//                       <TabsTrigger
//                         value="36"
//                         className="data-[state=active]:bg-gold-500 data-[state=active]:text-zinc-900"
//                       >
//                         36 mo
//                       </TabsTrigger>
//                       <TabsTrigger
//                         value="48"
//                         className="data-[state=active]:bg-gold-500 data-[state=active]:text-zinc-900"
//                       >
//                         48 mo
//                       </TabsTrigger>
//                       <TabsTrigger
//                         value="60"
//                         className="data-[state=active]:bg-gold-500 data-[state=active]:text-zinc-900"
//                       >
//                         60 mo
//                       </TabsTrigger>
//                     </TabsList>
//                   </Tabs>
//                 </div>

//                 <div>
//                   <div className="flex justify-between mb-2">
//                     <label className="text-sm font-medium text-zinc-300">Interest Rate</label>
//                     <span className="text-gold-500 font-semibold">{interestRate}%</span>
//                   </div>
//                   <Slider
//                     value={[interestRate]}
//                     min={1}
//                     max={10}
//                     step={0.1}
//                     onValueChange={(value) => setInterestRate(value[0])}
//                     className="my-4"
//                   />
//                   <div className="flex justify-between text-xs text-zinc-400">
//                     <span>1%</span>
//                     <span>10%</span>
//                   </div>
//                 </div>

//                 <div>
//                   <label className="text-sm font-medium text-zinc-300 mb-2 block">Payment Frequency</label>
//                   <Tabs defaultValue="monthly" onValueChange={setPaymentFrequency}>
//                     <TabsList className="grid grid-cols-3 h-auto bg-zinc-800">
//                       <TabsTrigger
//                         value="monthly"
//                         className="data-[state=active]:bg-gold-500 data-[state=active]:text-zinc-900"
//                       >
//                         Monthly
//                       </TabsTrigger>
//                       <TabsTrigger
//                         value="biweekly"
//                         className="data-[state=active]:bg-gold-500 data-[state=active]:text-zinc-900"
//                       >
//                         Bi-Weekly
//                       </TabsTrigger>
//                       <TabsTrigger
//                         value="weekly"
//                         className="data-[state=active]:bg-gold-500 data-[state=active]:text-zinc-900"
//                       >
//                         Weekly
//                       </TabsTrigger>
//                     </TabsList>
//                   </Tabs>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>

//           <div className="flex flex-col justify-center">
//             <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-8">
//               <h3 className="text-2xl font-playfair font-bold text-white mb-6">Your Estimated Payment</h3>

//               <div className="mb-8">
//                 <p className="text-5xl font-bold text-gold-500 mb-2">{formatCurrency(monthlyPayment)}</p>
//                 <p className="text-zinc-400">
//                   {paymentFrequency === "monthly"
//                     ? "per month"
//                     : paymentFrequency === "biweekly"
//                       ? "every two weeks"
//                       : "per week"}
//                 </p>
//               </div>

//               <div className="space-y-4 mb-8">
//                 <div className="flex justify-between py-3 border-b border-zinc-800">
//                   <span className="text-zinc-400">Vehicle Price</span>
//                   <span className="text-white font-medium">{formatCurrency(vehiclePrice)}</span>
//                 </div>
//                 <div className="flex justify-between py-3 border-b border-zinc-800">
//                   <span className="text-zinc-400">Down Payment</span>
//                   <span className="text-white font-medium">{formatCurrency(downPayment)}</span>
//                 </div>
//                 <div className="flex justify-between py-3 border-b border-zinc-800">
//                   <span className="text-zinc-400">Loan Amount</span>
//                   <span className="text-white font-medium">{formatCurrency(vehiclePrice - downPayment)}</span>
//                 </div>
//                 <div className="flex justify-between py-3 border-b border-zinc-800">
//                   <span className="text-zinc-400">Loan Term</span>
//                   <span className="text-white font-medium">{loanTerm} months</span>
//                 </div>
//                 <div className="flex justify-between py-3 border-b border-zinc-800">
//                   <span className="text-zinc-400">Interest Rate</span>
//                   <span className="text-white font-medium">{interestRate}%</span>
//                 </div>
//               </div>

//               <p className="text-zinc-400 text-sm mb-6">
//                 This is an estimate. Your actual payment may vary based on your credit score, taxes, and additional
//                 fees.
//               </p>

//               <div className="grid grid-cols-2 gap-4">
//                 <button className="bg-gold-500 text-zinc-900 hover:bg-gold-600 py-3 rounded-md font-medium transition-colors">
//                   Apply for Financing
//                 </button>
//                 <button className="border border-gold-500 text-gold-500 hover:bg-gold-500/10 py-3 rounded-md font-medium transition-colors">
//                   Contact a Specialist
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }
